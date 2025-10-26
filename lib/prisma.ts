let prisma: any

// Only initialize Prisma on server-side
if (typeof window === 'undefined') {
  try {
    // Try dynamic import first
    const { PrismaClient } = require('@prisma/client')
    
    const globalForPrisma = globalThis as unknown as {
      prisma: any | undefined
    }
    
    prisma = globalForPrisma.prisma ?? new PrismaClient()
    
    if (process.env.NODE_ENV !== 'production') {
      globalForPrisma.prisma = prisma
    }
  } catch (error) {
    console.error('Failed to initialize Prisma:', error)
    // Fallback to null for now
    prisma = null
  }
}

export { prisma }