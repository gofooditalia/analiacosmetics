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

export const productCategories: ProductCategory[] = [
  {
    id: "face",
    name: "Face Care",
    slug: "face",
    description: "Natural skincare products for radiant, healthy skin",
    image: "/face-care-category.png",
    productCount: 12,
  },
  {
    id: "body",
    name: "Body Care",
    slug: "body",
    description: "Nourishing body products for silky smooth skin",
    image: "/body-care-category.png",
    productCount: 8,
  },
  {
    id: "hair",
    name: "Hair Care",
    slug: "hair",
    description: "Natural hair treatments for healthy, beautiful hair",
    image: "/hair-care-category.png",
    productCount: 6,
  },
  {
    id: "makeup",
    name: "Makeup",
    slug: "makeup",
    description: "Natural makeup for effortless beauty",
    image: "/makeup-category.png",
    productCount: 10,
  },
  {
    id: "gifts",
    name: "Gift Sets",
    slug: "gifts",
    description: "Curated beauty sets perfect for gifting",
    image: "/gift-sets-category.png",
    productCount: 5,
  },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Natural Glow Face Serum",
    slug: "natural-glow-face-serum",
    category: "face",
    subcategory: "serums",
    price: 45.99,
    originalPrice: 59.99,
    description:
      "Transform your skin with our premium Natural Glow Face Serum, formulated with powerful botanical extracts and vitamins. This lightweight, fast-absorbing serum penetrates deep into the skin to deliver intense hydration and promote a radiant, youthful complexion.",
    shortDescription: "Lightweight serum for radiant, glowing skin with natural botanical extracts.",
    ingredients: [
      "Hyaluronic Acid",
      "Vitamin C",
      "Rose Hip Oil",
      "Jojoba Oil",
      "Aloe Vera Extract",
      "Green Tea Extract",
    ],
    benefits: [
      "Intense hydration",
      "Brightens complexion",
      "Reduces fine lines",
      "Evens skin tone",
      "Antioxidant protection",
    ],
    howToUse:
      "Apply 2-3 drops to clean face and neck morning and evening. Gently pat until absorbed. Follow with moisturizer.",
    images: [
      "/luxury-face-serum-bottle-with-natural-ingredients.png",
      "/serum-texture-shot.png",
      "/serum-ingredients.png",
    ],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    stockCount: 15,
    isNew: false,
    isBestSeller: true,
    isOnSale: true,
    tags: ["hydrating", "anti-aging", "brightening", "natural"],
    skinType: ["all", "dry", "mature"],
    volume: "30ml",
    brand: "Analia Cosmetics",
  },
  {
    id: "2",
    name: "Organic Rose Body Cream",
    slug: "organic-rose-body-cream",
    category: "body",
    subcategory: "moisturizers",
    price: 32.99,
    description:
      "Indulge in the luxurious texture of our Organic Rose Body Cream, enriched with organic rose petals and nourishing oils. This rich, creamy formula provides long-lasting moisture while leaving your skin delicately scented with the romantic fragrance of fresh roses.",
    shortDescription: "Rich, nourishing body cream with organic rose petals and essential oils.",
    ingredients: [
      "Organic Rose Petals",
      "Shea Butter",
      "Coconut Oil",
      "Sweet Almond Oil",
      "Rose Essential Oil",
      "Vitamin E",
    ],
    benefits: [
      "Deep moisturization",
      "Softens skin",
      "Romantic fragrance",
      "Anti-aging properties",
      "Soothes irritation",
    ],
    howToUse:
      "Apply generously to clean, dry skin. Massage in circular motions until fully absorbed. Use daily for best results.",
    images: [
      "/elegant-rose-body-cream-jar-with-pink-roses.png",
      "/rose-cream-texture.png",
      "/rose-petals-ingredients.png",
    ],
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    stockCount: 22,
    isNew: true,
    isBestSeller: false,
    isOnSale: false,
    tags: ["moisturizing", "organic", "rose", "luxury"],
    skinType: ["all", "dry", "sensitive"],
    volume: "200ml",
    brand: "Analia Cosmetics",
  },
  {
    id: "3",
    name: "Nourishing Hair Mask",
    slug: "nourishing-hair-mask",
    category: "hair",
    subcategory: "treatments",
    price: 28.99,
    description:
      "Revitalize damaged hair with our intensive Nourishing Hair Mask. This deep conditioning treatment is packed with natural proteins and oils to repair, strengthen, and restore your hair's natural shine and softness.",
    shortDescription: "Deep conditioning mask for damaged and dry hair with natural proteins.",
    ingredients: ["Argan Oil", "Keratin Protein", "Coconut Oil", "Avocado Oil", "Honey Extract", "Silk Protein"],
    benefits: ["Repairs damage", "Strengthens hair", "Adds shine", "Reduces frizz", "Improves manageability"],
    howToUse:
      "Apply to damp hair from mid-length to ends. Leave for 10-15 minutes. Rinse thoroughly. Use 1-2 times per week.",
    images: [
      "/natural-hair-mask-container-with-botanical-ingredi.png",
      "/hair-mask-application.png",
      "/before-after-hair.png",
    ],
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    stockCount: 18,
    isNew: false,
    isBestSeller: false,
    isOnSale: false,
    tags: ["repairing", "nourishing", "natural", "protein"],
    volume: "250ml",
    brand: "Analia Cosmetics",
  },
  {
    id: "4",
    name: "Natural Lip Tint Set",
    slug: "natural-lip-tint-set",
    category: "makeup",
    subcategory: "lips",
    price: 24.99,
    description:
      "Enhance your natural beauty with our Natural Lip Tint Set featuring three gorgeous shades. Made with organic ingredients and natural pigments, these tints provide buildable color while nourishing your lips.",
    shortDescription: "Set of 3 natural lip tints in beautiful shades with organic ingredients.",
    ingredients: ["Organic Beeswax", "Coconut Oil", "Natural Pigments", "Vitamin E", "Jojoba Oil", "Shea Butter"],
    benefits: ["Natural color", "Moisturizes lips", "Long-lasting", "Buildable coverage", "Chemical-free"],
    howToUse:
      "Apply directly to lips for a natural tint. Build up for more intense color. Can be used on cheeks for a natural blush.",
    images: [
      "/set-of-natural-lip-tints-in-elegant-packaging.png",
      "/lip-tint-swatches.png",
      "/lip-tint-application.png",
    ],
    rating: 4.6,
    reviewCount: 203,
    inStock: true,
    stockCount: 25,
    isNew: false,
    isBestSeller: false,
    isOnSale: false,
    tags: ["natural", "organic", "tinted", "moisturizing"],
    volume: "3 x 4ml",
    brand: "Analia Cosmetics",
  },
  {
    id: "5",
    name: "Gentle Cleansing Oil",
    slug: "gentle-cleansing-oil",
    category: "face",
    subcategory: "cleansers",
    price: 38.99,
    description:
      "Remove makeup and impurities gently with our Gentle Cleansing Oil. This luxurious oil blend melts away even waterproof makeup while nourishing your skin, leaving it clean, soft, and balanced.",
    shortDescription: "Gentle oil cleanser that removes makeup while nourishing the skin.",
    ingredients: ["Jojoba Oil", "Sweet Almond Oil", "Sunflower Oil", "Vitamin E", "Chamomile Extract", "Lavender Oil"],
    benefits: [
      "Removes all makeup",
      "Gentle on skin",
      "Nourishes while cleansing",
      "Balances oil production",
      "Soothes irritation",
    ],
    howToUse: "Apply to dry skin, massage gently to dissolve makeup. Add water to emulsify, then rinse thoroughly.",
    images: ["/gentle-cleansing-oil-bottle.png", "/cleansing-oil-texture.png", "/makeup-removal-demo.png"],
    rating: 4.7,
    reviewCount: 98,
    inStock: true,
    stockCount: 12,
    isNew: false,
    isBestSeller: true,
    isOnSale: false,
    tags: ["cleansing", "gentle", "makeup-remover", "nourishing"],
    skinType: ["all", "sensitive", "dry"],
    volume: "150ml",
    brand: "Analia Cosmetics",
  },
  {
    id: "6",
    name: "Hydrating Night Cream",
    slug: "hydrating-night-cream",
    category: "face",
    subcategory: "moisturizers",
    price: 52.99,
    description:
      "Wake up to beautifully hydrated skin with our Hydrating Night Cream. This rich, luxurious formula works overnight to repair, regenerate, and deeply moisturize your skin while you sleep.",
    shortDescription: "Rich night cream for deep hydration and overnight skin repair.",
    ingredients: ["Hyaluronic Acid", "Retinol", "Peptides", "Squalane", "Niacinamide", "Ceramides"],
    benefits: ["Overnight repair", "Deep hydration", "Anti-aging", "Improves texture", "Strengthens barrier"],
    howToUse:
      "Apply to clean face and neck before bedtime. Gently massage until absorbed. Use nightly for best results.",
    images: ["/hydrating-night-cream-jar.png", "/night-cream-texture.png", "/overnight-results.png"],
    rating: 4.8,
    reviewCount: 167,
    inStock: true,
    stockCount: 8,
    isNew: true,
    isBestSeller: false,
    isOnSale: false,
    tags: ["hydrating", "anti-aging", "night-care", "repair"],
    skinType: ["all", "dry", "mature"],
    volume: "50ml",
    brand: "Analia Cosmetics",
  },
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isBestSeller || product.isNew).slice(0, 4)
}

export function getRelatedProducts(productId: string, category: string): Product[] {
  return products.filter((product) => product.id !== productId && product.category === category).slice(0, 4)
}
