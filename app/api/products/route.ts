import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured') === 'true'
    const related = searchParams.get('related') === 'true'
    const exclude = searchParams.get('exclude')

    let whereClause: any = {}

    if (category) {
      whereClause.categoryId = category
    }

    if (featured) {
      whereClause.OR = [
        { isBestSeller: true },
        { isNew: true }
      ]
    }

    const products = await prisma.product.findMany({
      where: whereClause,
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

    const formattedProducts = products
      .filter(product => !related || product.id !== exclude)
      .map(product => ({
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
      }))

    if (featured) {
      return NextResponse.json(formattedProducts.slice(0, 4))
    }

    return NextResponse.json(formattedProducts)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}