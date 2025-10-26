import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
import { products } from '../lib/products'

dotenv.config()

const prisma = new PrismaClient()

async function migrateProducts() {
  try {
    console.log('Starting product migration...')
    
    // Create categories first
    const categories = await Promise.all([
      prisma.category.upsert({
        where: { slug: 'face' },
        update: {},
        create: {
          name: 'Face Care',
          slug: 'face',
          description: 'Natural skincare products for radiant, healthy skin',
        },
      }),
      prisma.category.upsert({
        where: { slug: 'body' },
        update: {},
        create: {
          name: 'Body Care',
          slug: 'body',
          description: 'Nourishing body products for silky smooth skin',
        },
      }),
      prisma.category.upsert({
        where: { slug: 'hair' },
        update: {},
        create: {
          name: 'Hair Care',
          slug: 'hair',
          description: 'Natural hair treatments for healthy, beautiful hair',
        },
      }),
      prisma.category.upsert({
        where: { slug: 'makeup' },
        update: {},
        create: {
          name: 'Makeup',
          slug: 'makeup',
          description: 'Natural makeup for effortless beauty',
        },
      }),
      prisma.category.upsert({
        where: { slug: 'gifts' },
        update: {},
        create: {
          name: 'Gift Sets',
          slug: 'gifts',
          description: 'Curated beauty sets perfect for gifting',
        },
      }),
    ])

    console.log('Categories created:', categories.length)

    // Create products
    for (const productData of products) {
      const category = categories.find(cat => cat.slug === productData.category)
      
      if (!category) {
        console.warn(`Category not found for product: ${productData.name}`)
        continue
      }

      const product = await prisma.product.create({
        data: {
          name: productData.name,
          slug: productData.slug,
          description: productData.description,
          shortDescription: productData.shortDescription,
          price: productData.price,
          originalPrice: productData.originalPrice,
          volume: productData.volume,
          brand: productData.brand,
          inStock: productData.inStock,
          stockCount: productData.stockCount,
          isNew: productData.isNew,
          isBestSeller: productData.isBestSeller,
          isOnSale: productData.isOnSale,
          rating: productData.rating,
          reviewCount: productData.reviewCount,
          categoryId: category.id,
          images: {
            create: productData.images.map((url, index) => ({
              url,
              position: index,
            })),
          },
          ingredients: {
            create: productData.ingredients.map((ingredient, index) => ({
              name: ingredient,
              position: index,
            })),
          },
          benefits: {
            create: productData.benefits.map((benefit, index) => ({
              benefit,
              position: index,
            })),
          },
        },
      })

      // Create tags
      for (const tagName of productData.tags) {
        const tag = await prisma.tag.upsert({
          where: { name: tagName },
          update: {},
          create: { name: tagName },
        })

        await prisma.productTag.create({
          data: {
            productId: product.id,
            tagId: tag.id,
          },
        })
      }

      console.log(`Created product: ${productData.name}`)
    }

    console.log('Migration completed successfully!')
    console.log(`Total products migrated: ${products.length}`)
    
  } catch (error) {
    console.error('Migration failed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

migrateProducts()