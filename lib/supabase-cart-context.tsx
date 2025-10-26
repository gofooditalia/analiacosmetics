"use client"

import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react"
import { supabase } from "@/lib/supabase"

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  variant?: string
}

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
  isLoading: boolean
}

type CartAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "LOAD_CART"; payload: CartItem[] }
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> & { quantity?: number } }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload }
    
    case "LOAD_CART":
      const total = action.payload.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const itemCount = action.payload.reduce((sum, item) => sum + item.quantity, 0)
      return { items: action.payload, total, itemCount, isLoading: false }
    
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.id === action.payload.id)
      const quantity = action.payload.quantity || 1

      let newItems: CartItem[]
      if (existingItem) {
        newItems = state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + quantity } : item,
        )
      } else {
        newItems = [...state.items, { ...action.payload, quantity }]
      }

      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return { items: newItems, total, itemCount, isLoading: false }
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== action.payload)
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return { items: newItems, total, itemCount, isLoading: false }
    }

    case "UPDATE_QUANTITY": {
      const newItems = state.items
        .map((item) =>
          item.id === action.payload.id ? { ...item, quantity: Math.max(0, action.payload.quantity) } : item,
        )
        .filter((item) => item.quantity > 0)

      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return { items: newItems, total, itemCount, isLoading: false }
    }

    case "CLEAR_CART":
      return { items: [], total: 0, itemCount: 0, isLoading: false }

    default:
      return state
  }
}

interface CartContextType extends CartState {
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => Promise<void>
  removeItem: (id: string) => Promise<void>
  updateQuantity: (id: string, quantity: number) => Promise<void>
  clearCart: () => Promise<void>
  refreshCart: () => Promise<void>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function SupabaseCartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
    isLoading: true,
  })

  const refreshCart = async () => {
    dispatch({ type: "SET_LOADING", payload: true })
    
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        // Load cart from database for authenticated users
        const response = await fetch('/api/cart')
        const cartData = await response.json()
        dispatch({ type: "LOAD_CART", payload: cartData.items || [] })
      } else {
        // Load cart from localStorage for guest users
        const savedCart = localStorage.getItem("analia-cart")
        if (savedCart) {
          const cartItems = JSON.parse(savedCart)
          dispatch({ type: "LOAD_CART", payload: cartItems })
        } else {
          dispatch({ type: "LOAD_CART", payload: [] })
        }
      }
    } catch (error) {
      console.error("Failed to load cart:", error)
      dispatch({ type: "LOAD_CART", payload: [] })
    }
  }

  useEffect(() => {
    refreshCart()
  }, [])

  const addItem = async (item: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        // Add to database cart
        await fetch('/api/cart/items', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item),
        })
      } else {
        // Add to localStorage cart
        const existingCart = JSON.parse(localStorage.getItem("analia-cart") || "[]")
        const existingItem = existingCart.find((cartItem: CartItem) => cartItem.id === item.id)
        
        if (existingItem) {
          existingItem.quantity += item.quantity || 1
        } else {
          existingCart.push({ ...item, quantity: item.quantity || 1 })
        }
        
        localStorage.setItem("analia-cart", JSON.stringify(existingCart))
      }
      
      await refreshCart()
    } catch (error) {
      console.error("Failed to add item to cart:", error)
    }
  }

  const removeItem = async (id: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        // Remove from database cart
        await fetch(`/api/cart/items/${id}`, {
          method: 'DELETE',
        })
      } else {
        // Remove from localStorage cart
        const existingCart = JSON.parse(localStorage.getItem("analia-cart") || "[]")
        const updatedCart = existingCart.filter((item: CartItem) => item.id !== id)
        localStorage.setItem("analia-cart", JSON.stringify(updatedCart))
      }
      
      await refreshCart()
    } catch (error) {
      console.error("Failed to remove item from cart:", error)
    }
  }

  const updateQuantity = async (id: string, quantity: number) => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        // Update in database cart
        await fetch(`/api/cart/items/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ quantity }),
        })
      } else {
        // Update in localStorage cart
        const existingCart = JSON.parse(localStorage.getItem("analia-cart") || "[]")
        const itemToUpdate = existingCart.find((item: CartItem) => item.id === id)
        
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity
          localStorage.setItem("analia-cart", JSON.stringify(existingCart))
        }
      }
      
      await refreshCart()
    } catch (error) {
      console.error("Failed to update item quantity:", error)
    }
  }

  const clearCart = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        // Clear database cart
        await fetch('/api/cart', {
          method: 'DELETE',
        })
      } else {
        // Clear localStorage cart
        localStorage.removeItem("analia-cart")
      }
      
      dispatch({ type: "CLEAR_CART" })
    } catch (error) {
      console.error("Failed to clear cart:", error)
    }
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        refreshCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useSupabaseCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useSupabaseCart must be used within a SupabaseCartProvider")
  }
  return context
}