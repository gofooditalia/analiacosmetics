"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { X, Filter } from "lucide-react"

interface ProductFiltersProps {
  onFiltersChange: (filters: FilterState) => void
  isOpen: boolean
  onToggle: () => void
}

export interface FilterState {
  categories: string[]
  priceRange: [number, number]
  skinTypes: string[]
  tags: string[]
  inStock: boolean
  onSale: boolean
}

const categories = [
  { id: "face", name: "Face Care" },
  { id: "body", name: "Body Care" },
  { id: "hair", name: "Hair Care" },
  { id: "makeup", name: "Makeup" },
  { id: "gifts", name: "Gift Sets" },
]

const skinTypes = [
  { id: "all", name: "All Skin Types" },
  { id: "dry", name: "Dry Skin" },
  { id: "oily", name: "Oily Skin" },
  { id: "sensitive", name: "Sensitive Skin" },
  { id: "mature", name: "Mature Skin" },
]

const popularTags = [
  { id: "natural", name: "Natural" },
  { id: "organic", name: "Organic" },
  { id: "hydrating", name: "Hydrating" },
  { id: "anti-aging", name: "Anti-Aging" },
  { id: "brightening", name: "Brightening" },
  { id: "nourishing", name: "Nourishing" },
]

export function ProductFilters({ onFiltersChange, isOpen, onToggle }: ProductFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 100],
    skinTypes: [],
    tags: [],
    inStock: false,
    onSale: false,
  })

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFiltersChange(updatedFilters)
  }

  const clearFilters = () => {
    const clearedFilters: FilterState = {
      categories: [],
      priceRange: [0, 100],
      skinTypes: [],
      tags: [],
      inStock: false,
      onSale: false,
    }
    setFilters(clearedFilters)
    onFiltersChange(clearedFilters)
  }

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.skinTypes.length > 0 ||
    filters.tags.length > 0 ||
    filters.inStock ||
    filters.onSale ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 100

  if (!isOpen) {
    return (
      <Button variant="outline" onClick={onToggle} className="lg:hidden bg-transparent">
        <Filter className="h-4 w-4 mr-2" />
        Filters
        {hasActiveFilters && (
          <Badge variant="secondary" className="ml-2">
            Active
          </Badge>
        )}
      </Button>
    )
  }

  return (
    <Card className="lg:sticky lg:top-24">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-lg">Filters</h3>
          <div className="flex items-center space-x-2">
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear All
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={onToggle} className="lg:hidden">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h4 className="font-medium mb-3">Categories</h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={category.id}
                    checked={filters.categories.includes(category.id)}
                    onCheckedChange={(checked) => {
                      const newCategories = checked
                        ? [...filters.categories, category.id]
                        : filters.categories.filter((c) => c !== category.id)
                      updateFilters({ categories: newCategories })
                    }}
                  />
                  <Label htmlFor={category.id} className="text-sm">
                    {category.name}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="font-medium mb-3">Price Range</h4>
            <div className="space-y-3">
              <Slider
                value={filters.priceRange}
                onValueChange={(value) => updateFilters({ priceRange: value as [number, number] })}
                max={100}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>€{filters.priceRange[0]}</span>
                <span>€{filters.priceRange[1]}+</span>
              </div>
            </div>
          </div>

          {/* Skin Type */}
          <div>
            <h4 className="font-medium mb-3">Skin Type</h4>
            <div className="space-y-2">
              {skinTypes.map((skinType) => (
                <div key={skinType.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={skinType.id}
                    checked={filters.skinTypes.includes(skinType.id)}
                    onCheckedChange={(checked) => {
                      const newSkinTypes = checked
                        ? [...filters.skinTypes, skinType.id]
                        : filters.skinTypes.filter((s) => s !== skinType.id)
                      updateFilters({ skinTypes: newSkinTypes })
                    }}
                  />
                  <Label htmlFor={skinType.id} className="text-sm">
                    {skinType.name}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h4 className="font-medium mb-3">Benefits</h4>
            <div className="space-y-2">
              {popularTags.map((tag) => (
                <div key={tag.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={tag.id}
                    checked={filters.tags.includes(tag.id)}
                    onCheckedChange={(checked) => {
                      const newTags = checked ? [...filters.tags, tag.id] : filters.tags.filter((t) => t !== tag.id)
                      updateFilters({ tags: newTags })
                    }}
                  />
                  <Label htmlFor={tag.id} className="text-sm">
                    {tag.name}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h4 className="font-medium mb-3">Availability</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="inStock"
                  checked={filters.inStock}
                  onCheckedChange={(checked) => updateFilters({ inStock: !!checked })}
                />
                <Label htmlFor="inStock" className="text-sm">
                  In Stock
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="onSale"
                  checked={filters.onSale}
                  onCheckedChange={(checked) => updateFilters({ onSale: !!checked })}
                />
                <Label htmlFor="onSale" className="text-sm">
                  On Sale
                </Label>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
