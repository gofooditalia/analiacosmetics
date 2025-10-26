import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RotateCcw, Package, CheckCircle, AlertCircle, Mail, Phone } from "lucide-react"

export default function ReturnsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4">Returns & Exchanges</h1>
            <p className="text-lg text-muted-foreground">
              We want you to love your purchase. If you're not completely satisfied, we're here to help.
            </p>
          </div>

          <div className="space-y-8">
            {/* Return Policy Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RotateCcw className="h-5 w-5" />
                  30-Day Return Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-green-800">Hassle-Free Returns</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Return any unopened product within 30 days of purchase for a full refund or exchange.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">30</span>
                    </div>
                    <h3 className="font-semibold mb-1">Days to Return</h3>
                    <p className="text-sm text-muted-foreground">From date of purchase</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Package className="h-12 w-12 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-1">Original Packaging</h3>
                    <p className="text-sm text-muted-foreground">Items must be unopened</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <CheckCircle className="h-12 w-12 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-1">Full Refund</h3>
                    <p className="text-sm text-muted-foreground">Or exchange for store credit</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What Can Be Returned */}
            <Card>
              <CardHeader>
                <CardTitle>What Can Be Returned</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <h3 className="font-semibold text-green-800">Eligible for Return</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Unopened skincare products</li>
                      <li>• Unopened makeup products</li>
                      <li>• Unopened hair care products</li>
                      <li>• Gift sets in original packaging</li>
                      <li>• Defective or damaged items</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <h3 className="font-semibold text-red-800">Not Eligible for Return</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Opened or used products</li>
                      <li>• Products without original packaging</li>
                      <li>• Items purchased with discount codes over 50% off</li>
                      <li>• Custom or personalized items</li>
                      <li>• Products past 30-day return window</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How to Return */}
            <Card>
              <CardHeader>
                <CardTitle>How to Return Your Order</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Contact Us</h3>
                      <p className="text-sm text-muted-foreground">
                        Email us at hello@analiacosmetics.com or call +356 2157 8900 to initiate your return. Please
                        include your order number and reason for return.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Receive Return Authorization</h3>
                      <p className="text-sm text-muted-foreground">
                        We'll send you a return authorization number and prepaid shipping label within 24 hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Package Your Items</h3>
                      <p className="text-sm text-muted-foreground">
                        Securely package your items in their original packaging. Include the return authorization number
                        and attach the prepaid shipping label.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Ship Your Return</h3>
                      <p className="text-sm text-muted-foreground">
                        Drop off your package at any post office or schedule a pickup. You'll receive tracking
                        information to monitor your return.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Receive Your Refund</h3>
                      <p className="text-sm text-muted-foreground">
                        Once we receive and process your return, your refund will be issued to your original payment
                        method within 5-7 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exchanges */}
            <Card>
              <CardHeader>
                <CardTitle>Exchanges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We're happy to exchange your unopened items for a different product or size. The exchange process
                  follows the same steps as returns, but please specify in your initial contact that you'd like an
                  exchange rather than a refund.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-medium text-blue-800 mb-2">Exchange Policy</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Exchanges must be for items of equal or lesser value</li>
                    <li>• If exchanging for a higher-value item, you'll pay the difference</li>
                    <li>• If exchanging for a lower-value item, you'll receive store credit for the difference</li>
                    <li>• Exchanges are subject to product availability</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-sm text-muted-foreground">hello@analiacosmetics.com</p>
                      <p className="text-xs text-muted-foreground">Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone Support</p>
                      <p className="text-sm text-muted-foreground">+356 2157 8900</p>
                      <p className="text-xs text-muted-foreground">Mon-Fri 9AM-7PM</p>
                    </div>
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
