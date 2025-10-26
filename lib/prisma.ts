let prisma: any

if (typeof window === 'undefined') {
  // Server-side only
  const { PrismaClient } = require('@prisma/client')
  
  const globalForPrisma = globalThis as unknown as {
    prisma: any | undefined
  }
  
  prisma = globalForPrisma.prisma ?? new PrismaClient()
  
  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma
  }
}

export { prisma }