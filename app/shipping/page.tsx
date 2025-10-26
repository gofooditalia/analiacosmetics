import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Package, MapPin, Clock, Euro, Shield } from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4">Shipping Information</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our shipping policies and delivery options
            </p>
          </div>

          <div className="space-y-8">
            {/* Shipping Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Shipping Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Standard Shipping</h3>
                      <Badge variant="secondary">3-5 Days</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Regular delivery within Malta and Gozo</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Cost:</span>
                      <span className="font-medium">€4.99</span>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Express Shipping</h3>
                      <Badge>1-2 Days</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Fast delivery within Malta and Gozo</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Cost:</span>
                      <span className="font-medium">€9.99</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Euro className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-green-800">Free Shipping</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Enjoy free standard shipping on all orders over €50 within Malta and Gozo
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Delivery Areas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Malta & Gozo</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• All areas in Malta</li>
                      <li>• All areas in Gozo</li>
                      <li>• Standard and Express shipping available</li>
                      <li>• Free shipping over €50</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">European Union</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Available to most EU countries</li>
                      <li>• 7-14 business days delivery</li>
                      <li>• Shipping cost calculated at checkout</li>
                      <li>• Customs duties may apply</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Processing Time */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Processing Time
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Package className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold mb-1">Order Processing</h3>
                    <p className="text-sm text-muted-foreground">1-2 business days</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold mb-1">In Transit</h3>
                    <p className="text-sm text-muted-foreground">1-5 business days</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold mb-1">Delivered</h3>
                    <p className="text-sm text-muted-foreground">Tracking confirmation</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-medium text-blue-800 mb-2">Order Cut-off Times</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Orders placed before 2:00 PM (Monday-Friday) are processed the same day</li>
                    <li>• Weekend orders are processed on the next business day</li>
                    <li>• Public holidays may affect processing times</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Special Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Important Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold mb-2">Packaging</h3>
                    <p className="text-sm text-muted-foreground">
                      All products are carefully packaged in eco-friendly materials to ensure they arrive in perfect
                      condition. Fragile items receive extra protection.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Tracking</h3>
                    <p className="text-sm text-muted-foreground">
                      You'll receive a tracking number via email once your order ships. You can track your package
                      through our website or the carrier's tracking system.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Delivery Issues</h3>
                    <p className="text-sm text-muted-foreground">
                      If you experience any issues with your delivery, please contact us immediately at
                      hello@analiacosmetics.com or +356 2157 8900.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
