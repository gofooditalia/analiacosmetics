"use client"

import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react"
import { supabase } from "@/lib/supabase"
import type { User, Session } from "@supabase/supabase-js"

// Order interface for our application
interface Order {
  id: string
  orderNumber: string
  status: string
  subtotal: number
  shippingCost: number
  tax: number
  total: number
  currency: string
  notes?: string
  date: string
  items: OrderItem[]
}

// OrderItem interface for our application
interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
}

// Address interface for our application
interface Address {
  id: string
  type: string
  firstName: string
  lastName: string
  address: string
  city: string
  postalCode: string
  country: string
  isDefault: boolean
}

// Extended user type for our application
interface ExtendedUser extends User {
  firstName?: string
  lastName?: string
  phone?: string
  orders?: Order[]
  addresses?: Address[]
}

interface AuthState {
  user: ExtendedUser | null
  session: Session | null
  isAuthenticated: boolean
  isLoading: boolean
}

type AuthAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_SESSION"; payload: { session: Session | null; user: User | null } }
  | { type: "SIGN_OUT" }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload }
    
    case "SET_SESSION":
      return {
        ...state,
        session: action.payload.session,
        user: action.payload.user,
        isAuthenticated: !!action.payload.user,
        isLoading: false,
      }
    
    case "SIGN_OUT":
      return {
        ...state,
        user: null,
        session: null,
        isAuthenticated: false,
        isLoading: false,
      }
    
    default:
      return state
  }
}

interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string, metadata: any) => Promise<{ error: any }>
  register: (email: string, password: string, metadata: any) => Promise<{ error: any }>
  signOut: () => Promise<void>
  login: (email: string, password: string) => Promise<{ error: any }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function SupabaseAuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    session: null,
    isAuthenticated: false,
    isLoading: true,
  })

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      dispatch({
        type: "SET_SESSION",
        payload: {
          session,
          user: session?.user || null,
        },
      })
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        dispatch({
          type: "SET_SESSION",
          payload: {
            session,
            user: session?.user || null,
          },
        })
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { error }
  }

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { error }
  }

  const signUp = async (email: string, password: string, metadata: any) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
      },
    })
    return { error }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    dispatch({ type: "SIGN_OUT" })
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        register: signUp,
        login: signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useSupabaseAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useSupabaseAuth must be used within a SupabaseAuthProvider")
  }
  return context
}