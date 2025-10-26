"use client"

import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react"

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  dateOfBirth?: string
  preferences: {
    skinType?: string
    concerns?: string[]
    newsletter: boolean
  }
  addresses: Address[]
  orders: Order[]
}

export interface Address {
  id: string
  type: "shipping" | "billing"
  firstName: string
  lastName: string
  address: string
  city: string
  postalCode: string
  country: string
  isDefault: boolean
}

export interface Order {
  id: string
  date: string
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  total: number
  items: Array<{
    id: string
    name: string
    price: number
    quantity: number
    image: string
  }>
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

type AuthAction =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" }
  | { type: "UPDATE_USER"; payload: Partial<User> }
  | { type: "SET_LOADING"; payload: boolean }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      }
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      }
    case "UPDATE_USER":
      return {
        ...state,
        user: state.user ? { ...state.user, ...action.payload } : null,
      }
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>
  register: (userData: RegisterData) => Promise<boolean>
  logout: () => void
  updateUser: (userData: Partial<User>) => void
}

interface RegisterData {
  email: string
  password: string
  firstName: string
  lastName: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    isLoading: true,
  })

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("analia-user")
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser)
        dispatch({ type: "LOGIN", payload: user })
      } catch (error) {
        console.error("Failed to load user from localStorage:", error)
        localStorage.removeItem("analia-user")
      }
    }
    dispatch({ type: "SET_LOADING", payload: false })
  }, [])

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (state.user) {
      localStorage.setItem("analia-user", JSON.stringify(state.user))
    } else {
      localStorage.removeItem("analia-user")
    }
  }, [state.user])

  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch({ type: "SET_LOADING", payload: true })

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock authentication - in real app, this would call your API
    if (email && password) {
      const mockUser: User = {
        id: "user-1",
        email,
        firstName: "Maria",
        lastName: "Garcia",
        phone: "+356 2123 4567",
        preferences: {
          skinType: "combination",
          concerns: ["anti-aging", "hydration"],
          newsletter: true,
        },
        addresses: [
          {
            id: "addr-1",
            type: "shipping",
            firstName: "Maria",
            lastName: "Garcia",
            address: "123 Main Street",
            city: "St Paul's Bay",
            postalCode: "SPB 1234",
            country: "Malta",
            isDefault: true,
          },
        ],
        orders: [
          {
            id: "order-1",
            date: "2024-01-15",
            status: "delivered",
            total: 89.99,
            items: [
              {
                id: "prod-1",
                name: "Hydrating Face Serum",
                price: 45.99,
                quantity: 1,
                image: "/placeholder.svg",
              },
              {
                id: "prod-2",
                name: "Natural Face Moisturizer",
                price: 44.0,
                quantity: 1,
                image: "/placeholder.svg",
              },
            ],
          },
        ],
      }

      dispatch({ type: "LOGIN", payload: mockUser })
      return true
    }

    dispatch({ type: "SET_LOADING", payload: false })
    return false
  }

  const register = async (userData: RegisterData): Promise<boolean> => {
    dispatch({ type: "SET_LOADING", payload: true })

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newUser: User = {
      id: `user-${Date.now()}`,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      preferences: {
        newsletter: false,
      },
      addresses: [],
      orders: [],
    }

    dispatch({ type: "LOGIN", payload: newUser })
    return true
  }

  const logout = () => {
    dispatch({ type: "LOGOUT" })
  }

  const updateUser = (userData: Partial<User>) => {
    dispatch({ type: "UPDATE_USER", payload: userData })
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
