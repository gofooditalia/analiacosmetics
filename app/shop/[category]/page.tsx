"use client"

import { useState, useMemo } from "react"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ProductFilters, type FilterState } from "@/components/product-filters"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search, Grid, List, SlidersHorizontal } from "lucide-react"
import { getProductsByCategory, productCategories } from "@/lib/products"

interface CategoryPageProps {
  params: {
    category: string
  }
}

type SortOption = "featured" | "price-low" | "price-high" | "newest" | "rating"
type ViewMode = "grid" | "list"

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = productCategories.find((cat) => cat.slug === params.category)
  const categoryProducts = getProductsByCategory(params.category)

  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<SortOption>("featured")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    categories: [params.category],
    priceRange: [0, 100],
    skinTypes: [],
    tags: [],
    inStock: false,
    onSale: false,
  })

  if (!category || categoryProducts.length === 0) {
    notFound()
  }

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = categoryProducts.filter((product) => {
      // Search query
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      // Price range
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      // Skin type
      if (filters.skinTypes.length > 0 && product.skinType) {
        const hasMatchingSkinType = filters.skinTypes.some((type) => product.skinType?.includes(type))
        if (!hasMatchingSkinType) return false
      }

      // Tags
      if (filters.tags.length > 0) {
        const hasMatchingTag = filters.tags.some((tag) => product.tags.includes(tag))
        if (!hasMatchingTag) return false
      }

      // Stock filter
      if (filters.inStock && !product.inStock) {
        return false
      }

      // Sale filter
      if (filters.onSale && !product.isOnSale) {
        return false
      }

      return true
    })

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default: // featured
        filtered.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0))
    }

    return filtered
  }, [searchQuery, sortBy, filters, categoryProducts])

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <nav className="mb-4 text-sm text-muted-foreground">
            <span>Home</span> / <span>Shop</span> / <span className="text-foreground">{category.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">{category.name}</h1>
          <p className="text-lg text-muted-foreground">{category.description}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <ProductFilters
              onFiltersChange={setFilters}
              isOpen={filtersOpen}
              onToggle={() => setFiltersOpen(!filtersOpen)}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={`Search ${category.name.toLowerCase()}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Sort */}
              <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Mobile Filters Toggle */}
              <Button variant="outline" onClick={() => setFiltersOpen(!filtersOpen)} className="lg:hidden">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredAndSortedProducts.length} of {categoryProducts.length} products
              </p>
            </div>

            {/* Products Grid */}
            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* No Results */}
            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">No products found</p>
                <p className="text-sm text-muted-foreground">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
