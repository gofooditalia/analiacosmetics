import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface Product {
  id: string
  name: string
  slug: string
  category: string
  subcategory?: string
  price: number
  originalPrice?: number
  description: string
  shortDescription: string
  ingredients: string[]
  benefits: string[]
  howToUse: string
  images: string[]
  rating: number
  reviewCount: number
  inStock: boolean
  stockCount: number
  isNew: boolean
  isBestSeller: boolean
  isOnSale: boolean
  tags: string[]
  skinType?: string[]
  volume?: string
  brand: string
}

export interface ProductCategory {
  id: string
  name: string
  slug: string
  description: string
  image: string
  productCount: number
}

export async function getProductCategories(): Promise<ProductCategory[]> {
  const response = await fetch('/api/categories')
  if (!response.ok) {
    throw new Error('Failed to fetch categories')
  }
  return response.json()
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch('/api/products')
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  return response.json()
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const response = await fetch(`/api/products?category=${category}`)
  if (!response.ok) {
    throw new Error('Failed to fetch products by category')
  }
  return response.json()
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const response = await fetch(`/api/products/${slug}`)
  if (!response.ok) {
    return undefined
  }
  return response.json()
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const response = await fetch('/api/products?featured=true')
  if (!response.ok) {
    throw new Error('Failed to fetch featured products')
  }
  return response.json()
}

export async function getRelatedProducts(productId: string, category: string): Promise<Product[]> {
  const response = await fetch(`/api/products?related=true&category=${category}&exclude=${productId}`)
  if (!response.ok) {
    throw new Error('Failed to fetch related products')
  }
  return response.json()
}
