"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { useSupabaseCart } from "@/lib/supabase-cart-context"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useSupabaseCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0] || "/placeholder.svg",
    })
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <Link href={`/products/${product.slug}`}>
            <img
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && <Badge className="bg-primary text-primary-foreground">New</Badge>}
            {product.isBestSeller && <Badge variant="secondary">Best Seller</Badge>}
            {product.isOnSale && <Badge className="bg-destructive text-destructive-foreground">Sale</Badge>}
            {!product.inStock && (
              <Badge variant="outline" className="bg-background/80">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-3 right-3 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4" />
          </Button>

          {/* Quick Add to Cart */}
          {product.inStock && (
            <Button
              size="sm"
              className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-primary hover:bg-primary/90"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <div>
            <p className="text-sm text-muted-foreground capitalize">{product.category}</p>
            <Link href={`/products/${product.slug}`}>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {product.name}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.shortDescription}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-primary">€{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">€{product.originalPrice}</span>
              )}
            </div>
            {product.volume && <span className="text-sm text-muted-foreground">{product.volume}</span>}
          </div>

          {/* Stock Status */}
          {product.inStock && product.stockCount <= 5 && (
            <p className="text-sm text-orange-600">Only {product.stockCount} left in stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
