import type React from "react"
import type { Metadata } from "next"
import { CartProvider } from "@/lib/cart-context"
import { AuthProvider } from "@/lib/auth-context"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "Analia Cosmetics - Natural Beauty Products | Malta",
  description:
    "Discover natural cosmetics and beauty products at Analia Cosmetics. Premium skincare, makeup, and hair care products in Malta. Shop online or visit our store in St Paul's Bay.",
  keywords: "natural cosmetics, beauty products, skincare, makeup, Malta, organic beauty, natural skincare",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <LanguageProvider>
          <AuthProvider>
            <CartProvider>{children}</CartProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
