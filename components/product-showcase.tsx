"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const featuredProducts = [
  {
    id: 1,
    name: "Natural Glow Face Serum",
    category: "Face Care",
    price: 45.99,
    originalPrice: 59.99,
    rating: 4.8,
    reviews: 124,
    image: "/luxury-face-serum-bottle-with-natural-ingredients.png",
    badge: "Best Seller",
    isNew: false,
  },
  {
    id: 2,
    name: "Organic Rose Body Cream",
    category: "Body Care",
    price: 32.99,
    rating: 4.9,
    reviews: 89,
    image: "/elegant-rose-body-cream-jar-with-pink-roses.png",
    badge: "New",
    isNew: true,
  },
  {
    id: 3,
    name: "Nourishing Hair Mask",
    category: "Hair Care",
    price: 28.99,
    rating: 4.7,
    reviews: 156,
    image: "/natural-hair-mask-container-with-botanical-ingredi.png",
    badge: "Popular",
    isNew: false,
  },
  {
    id: 4,
    name: "Natural Lip Tint Set",
    category: "Makeup",
    price: 24.99,
    rating: 4.6,
    reviews: 203,
    image: "/set-of-natural-lip-tints-in-elegant-packaging.png",
    badge: "Gift Set",
    isNew: false,
  },
]

export function ProductShowcase() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">{t("featured.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("featured.subtitle")}</p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Badges */}
                  <div className="absolute top-3 left-3">
                    <Badge
                      variant={product.isNew ? "default" : "secondary"}
                      className={product.isNew ? "bg-primary" : "bg-secondary text-secondary-foreground"}
                    >
                      {product.badge}
                    </Badge>
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
                  <Button
                    size="sm"
                    className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-primary hover:bg-primary/90"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {t("product.addToCart")}
                  </Button>
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
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
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-primary">€{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">€{product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            {t("featured.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  )
}
