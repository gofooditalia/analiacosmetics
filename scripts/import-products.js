// Script to fetch and parse WooCommerce product CSV export
// and transform it into the format used by the Analia Cosmetics website

const CSV_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wc-product-export-17-10-2025-1760688892204-l3usahQ2DT2the5mFmyBAJDDk2g9BV.csv"

async function fetchAndParseCSV() {
  try {
    console.log("[v0] Fetching CSV from:", CSV_URL)

    const response = await fetch(CSV_URL)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const csvText = await response.text()
    console.log("[v0] CSV fetched successfully, length:", csvText.length)

    // Parse CSV manually (simple parser)
    const lines = csvText.split("\n")
    const headers = lines[0].split(",").map((h) => h.trim().replace(/"/g, ""))

    console.log("[v0] CSV Headers:", headers)
    console.log("[v0] Total rows:", lines.length - 1)

    const products = []

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue

      // Parse CSV line (handling quoted values)
      const values = parseCSVLine(lines[i])

      if (values.length < headers.length) continue

      const row = {}
      headers.forEach((header, index) => {
        row[header] = values[index] || ""
      })

      // Transform to our product format
      const product = transformProduct(row, i)
      if (product) {
        products.push(product)
      }
    }

    console.log("[v0] Parsed products:", products.length)
    console.log("[v0] Sample product:", JSON.stringify(products[0], null, 2))

    // Output the products array
    console.log("\n\n=== PRODUCTS DATA ===\n")
    console.log(JSON.stringify(products, null, 2))

    return products
  } catch (error) {
    console.error("[v0] Error fetching/parsing CSV:", error)
    throw error
  }
}

function parseCSVLine(line) {
  const values = []
  let current = ""
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === "," && !inQuotes) {
      values.push(current.trim())
      current = ""
    } else {
      current += char
    }
  }

  values.push(current.trim())
  return values
}

function transformProduct(row, index) {
  // Map WooCommerce fields to our product structure
  const name = row["Name"] || row["name"] || ""
  const description = row["Description"] || row["description"] || row["Short description"] || ""
  const price = Number.parseFloat(row["Regular price"] || row["Price"] || row["price"] || "0")
  const salePrice = Number.parseFloat(row["Sale price"] || "0")
  const sku = row["SKU"] || row["sku"] || `PROD-${index}`
  const categories = row["Categories"] || row["categories"] || ""
  const images = row["Images"] || row["images"] || ""
  const stock = row["Stock"] || row["In stock?"] || "instock"

  if (!name) return null

  // Determine category
  let category = "face"
  const catLower = categories.toLowerCase()
  if (catLower.includes("body") || catLower.includes("corpo")) {
    category = "body"
  } else if (catLower.includes("hair") || catLower.includes("capelli") || catLower.includes("cabello")) {
    category = "hair"
  } else if (catLower.includes("makeup") || catLower.includes("trucco") || catLower.includes("maquillaje")) {
    category = "makeup"
  } else if (catLower.includes("gift") || catLower.includes("regalo")) {
    category = "gifts"
  }

  // Parse images
  const imageUrls = images
    .split(",")
    .map((url) => url.trim())
    .filter((url) => url)
  const mainImage = imageUrls[0] || "/natural-cosmetic-product.jpg"

  // Create slug from name
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

  return {
    id: sku,
    name: name,
    slug: slug,
    price: salePrice > 0 ? salePrice : price,
    originalPrice: salePrice > 0 ? price : undefined,
    image: mainImage,
    images: imageUrls.length > 0 ? imageUrls : [mainImage],
    category: category,
    description: description || `${name} - Natural cosmetic product from Analia Cosmetics`,
    rating: 4.5 + Math.random() * 0.5, // Random rating between 4.5-5.0
    reviews: Math.floor(Math.random() * 50) + 10, // Random reviews 10-60
    inStock: stock.toLowerCase() === "instock" || stock === "1" || stock === "true",
    featured: index <= 4, // First 4 products are featured
    ingredients: [],
    benefits: [],
    howToUse: description,
  }
}

// Run the script
fetchAndParseCSV().catch(console.error)
