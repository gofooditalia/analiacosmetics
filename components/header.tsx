"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu, X, ChevronDown, Globe, User } from "lucide-react"
import { CartDrawer } from "@/components/cart-drawer"
import { useSupabaseAuth } from "@/lib/supabase-auth-context"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, isAuthenticated, signOut } = useSupabaseAuth()
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/analia-logo.png"
              alt="Analia Cosmetics"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-serif text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Analia Cosmetics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>{t("header.shop")}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/shop/face" className="block px-4 py-2 text-sm hover:bg-muted">
                    {t("category.face")}
                  </Link>
                  <Link href="/shop/body" className="block px-4 py-2 text-sm hover:bg-muted">
                    {t("category.body")}
                  </Link>
                  <Link href="/shop/hair" className="block px-4 py-2 text-sm hover:bg-muted">
                    {t("category.hair")}
                  </Link>
                  <Link href="/shop/makeup" className="block px-4 py-2 text-sm hover:bg-muted">
                    {t("category.makeup")}
                  </Link>
                  <Link href="/shop/gifts" className="block px-4 py-2 text-sm hover:bg-muted">
                    {t("category.gifts")}
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              {t("header.about")}
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              {t("header.contact")}
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
              {t("header.beautyTips")}
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center space-x-1">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </Button>

            {isAuthenticated ? (
              <div className="relative group">
                <Button variant="ghost" size="icon" className="flex items-center space-x-1">
                  <User className="h-5 w-5" />
                </Button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <div className="px-4 py-2 border-b">
                      <p className="text-sm font-medium">
                        {user?.user_metadata?.firstName || user?.email?.split('@')[0]} {user?.user_metadata?.lastName || ''}
                      </p>
                      <p className="text-xs text-muted-foreground">{user?.email}</p>
                    </div>
                    <Link href="/account" className="block px-4 py-2 text-sm hover:bg-muted">
                      {t("header.myAccount")}
                    </Link>
                    <Link href="/account?tab=orders" className="block px-4 py-2 text-sm hover:bg-muted">
                      {t("header.orderHistory")}
                    </Link>
                    <Link href="/account?tab=addresses" className="block px-4 py-2 text-sm hover:bg-muted">
                      {t("header.addresses")}
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">{t("header.signIn")}</Link>
              </Button>
            )}

            {/* Cart */}
            <CartDrawer />

            {/* Mobile Menu Toggle */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-2">
              <Link href="/shop" className="block py-2 text-foreground hover:text-primary">
                {t("header.shopAll")}
              </Link>
              <Link href="/shop/face" className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                {t("category.face")}
              </Link>
              <Link href="/shop/body" className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                {t("category.body")}
              </Link>
              <Link href="/shop/hair" className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                {t("category.hair")}
              </Link>
              <Link href="/shop/makeup" className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary">
                {t("category.makeup")}
              </Link>
              <Link href="/about" className="block py-2 text-foreground hover:text-primary">
                {t("header.about")}
              </Link>
              <Link href="/contact" className="block py-2 text-foreground hover:text-primary">
                {t("header.contact")}
              </Link>
              <Link href="/blog" className="block py-2 text-foreground hover:text-primary">
                {t("header.beautyTips")}
              </Link>
              {isAuthenticated ? (
                <>
                  <Link href="/account" className="block py-2 text-foreground hover:text-primary">
                    {t("header.myAccount")}
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full px-4 py-2 text-left text-foreground hover:text-primary"
                  >
                    {t("header.signOut")}
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="block py-2 text-foreground hover:text-primary">
                    {t("header.signIn")}
                  </Link>
                  <Link href="/register" className="block py-2 text-foreground hover:text-primary">
                    {t("header.createAccount")}
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
