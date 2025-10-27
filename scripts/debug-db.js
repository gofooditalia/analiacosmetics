const { PrismaClient } = require('@prisma/client');

// Test database connection
const prisma = new PrismaClient();

async function testConnection() {
  try {
    console.log('Testing database connection...');
    console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'SET' : 'NOT SET');
    
    // Test basic connection
    const categoryCount = await prisma.category.count();
    console.log('Categories count:', categoryCount);
    
    const productCount = await prisma.product.count();
    console.log('Products count:', productCount);
    
    console.log('Database connection successful!');
  } catch (error) {
    console.error('Database connection failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();