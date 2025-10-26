import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const product = await prisma.product.findUnique({
      where: { slug },
      include: {
        images: true,
        ingredients: true,
        benefits: true,
        tags: {
          include: {
            tag: true
          }
        }
      }
    })

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    const formattedProduct = {
      id: product.id,
      name: product.name,
      slug: product.slug,
      category: product.categoryId,
      subcategory: undefined,
      price: Number(product.price),
      originalPrice: product.originalPrice ? Number(product.originalPrice) : undefined,
      description: product.description,
      shortDescription: product.shortDescription,
      ingredients: product.ingredients.map(ing => ing.name),
      benefits: product.benefits.map(ben => ben.benefit),
      howToUse: '',
      images: product.images.map(img => img.url),
      rating: product.rating,
      reviewCount: product.reviewCount,
      inStock: product.inStock,
      stockCount: product.stockCount,
      isNew: product.isNew,
      isBestSeller: product.isBestSeller,
      isOnSale: product.isOnSale,
      tags: product.tags.map(pt => pt.tag.name),
      skinType: undefined,
      volume: product.volume || '30ml',
      brand: product.brand
    }

    return NextResponse.json(formattedProduct)
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 })
  }
}