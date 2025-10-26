import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'
import csv from 'csv-parser'

dotenv.config()

const prisma = new PrismaClient()

interface CSVProduct {
  ID: string
  Tipo: string
  SKU: string
  'GTIN, UPC, EAN o ISBN': string
  Nombre: string
  Publicado: string
  '¿Está destacado?': string
  'Visibilidad en el catálogo': string
  'Descripción corta': string
  Descripción: string
  'Día en que empieza el precio rebajado': string
  'Día en que termina el precio rebajado': string
  'Estado del impuesto': string
  'Clase de impuesto': string
  '¿Existencias?': string
  Inventario: string
  'Cantidad de bajo inventario': string
  '¿Permitir reservas de productos agotados?': string
  '¿Vendido individualmente?': string
  'Peso (kg)': string
  'Longitud (cm)': string
  'Anchura (cm)': string
  'Altura (cm)': string
  '¿Permitir valoraciones de clientes?': string
  'Nota de compra': string
  'Precio rebajado': string
  'Precio normal': string
  Categorías: string
  Etiquetas: string
  'Clase de envío': string
  Imágenes: string
  'Límite de descargas': string
  'Días de caducidad de la descarga': string
  Superior: string
  'Productos agrupados': string
  'Ventas dirigidas': string
  'Ventas cruzadas': string
  'URL externa': string
  'Texto del botón': string
  Posición: string
  Marcas: string
  'Datos personalizados de Blocksy': string
  'Imágenes de variación de Blocksy': string
  'Meta: stackable_optimized_css': string
  'Meta: _ppcp_button_position': string
  'Meta: ekit_post_views_count': string
  'Meta: classic-editor-remember': string
  'Nombre del atributo 1': string
  'Valor(es) del atributo 1': string
  'Atributo visible 1': string
  'Atributo global 1': string
  'Meta: selected_images_categories': string
  'Meta: price': string
}

async function parseCSV(filePath: string): Promise<CSVProduct[]> {
  return new Promise((resolve, reject) => {
    const products: CSVProduct[] = []
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: CSVProduct) => products.push(data))
      .on('end', () => resolve(products))
      .on('error', reject)
  })
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

async function importProducts() {
  try {
    console.log('Starting CSV product import...')

    // Clear existing data
    await prisma.productTag.deleteMany()
    await prisma.productImage.deleteMany()
    await prisma.product.deleteMany()
    await prisma.category.deleteMany()
    console.log('Cleared existing data')

    const csvPath = path.join(process.cwd(), 'wc-product-export-17-10-2025-1760688892204.csv')
    const products = await parseCSV(csvPath)

    console.log(`Found ${products.length} products in CSV`)

    // Create categories from CSV
    const categoryMap = new Map<string, string>()
    const uniqueCategories = new Set<string>()

    products.forEach(product => {
      if (product.Categorías) {
        const cats = product.Categorías.split(',').map((c: string) => c.trim())
        cats.forEach((cat: string) => uniqueCategories.add(cat))
      }
    })

    for (const catPath of uniqueCategories) {
      const parts = catPath.split('>').map(p => p.trim())
      for (let i = 0; i < parts.length; i++) {
        const fullPath = parts.slice(0, i + 1).join(' > ')
        if (!categoryMap.has(fullPath)) {
          const slug = generateSlug(parts[i])
          const category = await prisma.category.upsert({
            where: { slug },
            update: {},
            create: {
              name: parts[i],
              slug,
              description: `Category for ${parts[i]}`,
            },
          })
          categoryMap.set(fullPath, category.id)
        }
      }
    }

    console.log(`Created ${categoryMap.size} categories`)

    // Import products
    const usedSlugs = new Set<string>()
    for (const productData of products) {
      let slug = generateSlug(productData.Nombre)
      let counter = 1
      while (usedSlugs.has(slug)) {
        slug = `${generateSlug(productData.Nombre)}-${counter}`
        counter++
      }
      usedSlugs.add(slug)
      const price = parseFloat(productData['Precio normal']) || 0
      const stockCount = parseInt(productData.Inventario) || 0
      const inStock = productData['¿Existencias?'] === '1'

      // Get category
      let categoryId: string | null = null
      if (productData.Categorías) {
        const catPath = productData.Categorías.split(',')[0].trim()
        categoryId = categoryMap.get(catPath) || null
      }

      // Get or create default category
      if (!categoryId) {
        const defaultCategory = await prisma.category.upsert({
          where: { slug: 'uncategorized' },
          update: {},
          create: {
            name: 'Uncategorized',
            slug: 'uncategorized',
            description: 'Default category for products',
          },
        })
        categoryId = defaultCategory.id
      }

      const product = await prisma.product.create({
        data: {
          name: productData.Nombre,
          slug,
          description: productData.Descripción,
          shortDescription: productData['Descripción corta'] || productData.Descripción.substring(0, 200),
          price,
          volume: '30ml', // Default since not in CSV
          brand: productData.Marcas || 'Analia Cosmetics',
          inStock,
          stockCount,
          categoryId,
          images: productData.Imágenes ? {
            create: productData.Imágenes.split(',').map((url: string, index: number) => ({
              url: url.trim(),
              position: index,
            })),
          } : undefined,
        },
      })

      console.log(`Imported product: ${productData.Nombre}`)
    }

    console.log('Import completed successfully!')

  } catch (error) {
    console.error('Import failed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

importProducts()