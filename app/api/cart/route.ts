import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // First, let's check if we need to create the user in our database
    await prisma.user.upsert({
      where: { id: user.id },
      update: {},
      create: {
        id: user.id,
        email: user.email || '',
        firstName: user.user_metadata?.firstName || '',
        lastName: user.user_metadata?.lastName || '',
      },
    })

    const cart = await prisma.cart.findFirst({
      where: { userId: user.id },
      include: {
        items: {
          include: {
            product: {
              include: {
                images: {
                  where: { position: 0 },
                  take: 1,
                },
              },
            },
          },
        },
      },
    })

    const items = cart?.items.map((item: any) => ({
      id: item.productId,
      name: item.product.name,
      price: Number(item.price),
      image: item.product.images[0]?.url || '/placeholder.svg',
      quantity: item.quantity,
      variant: item.variant,
    })) || []

    return NextResponse.json({ items })
  } catch (error) {
    console.error('Cart fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await prisma.cart.deleteMany({
      where: { userId: user.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Cart clear error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}