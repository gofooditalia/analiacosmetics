import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/analia-logo.png"
                alt="Analia Cosmetics"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-serif text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Analia Cosmetics
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for natural beauty products in Malta. Discover the power of nature for radiant,
              healthy skin.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/shop" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Shop All
              </Link>
              <Link
                href="/shop/face"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Face Care
              </Link>
              <Link
                href="/shop/body"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Body Care
              </Link>
              <Link
                href="/shop/makeup"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Makeup
              </Link>
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/blog" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Beauty Tips
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold">Customer Service</h3>
            <nav className="space-y-2">
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/shipping"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Shipping & Returns
              </Link>
              <Link href="/faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link
                href="/size-guide"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Size Guide
              </Link>
              <Link
                href="/privacy"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  345 Tourist St
                  <br />
                  St Paul's Bay SPB2500
                  <br />
                  Malta
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+356 79405866</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@analiacosmetics.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  Mon-Sat: 9:00-18:00
                  <br />
                  Sunday: Closed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">© 2024 Analia Cosmetics. All rights reserved.</p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Secure payments</span>
            <span>•</span>
            <span>Free shipping over €50</span>
            <span>•</span>
            <span>30-day returns</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
