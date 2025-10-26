import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Mail } from "lucide-react"

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for your purchase. Your order has been successfully placed.
        </p>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Mail className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <h3 className="font-semibold">Confirmation Email</h3>
                  <p className="text-sm text-muted-foreground">We've sent you an order confirmation email</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Package className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <h3 className="font-semibold">Shipping</h3>
                  <p className="text-sm text-muted-foreground">Your order will be shipped within 2-3 business days</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Button asChild size="lg">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
          <div>
            <Button variant="outline" asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
