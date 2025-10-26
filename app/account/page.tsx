"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Package, MapPin, Settings, LogOut, Eye } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

export default function AccountPage() {
  const { user, isAuthenticated, isLoading, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">Loading...</div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!user) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-serif font-bold">My Account</h1>
              <p className="text-muted-foreground">Welcome back, {user.firstName}!</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{user.orders.length}</div>
                    <p className="text-xs text-muted-foreground">
                      {user.orders.filter((o) => o.status === "delivered").length} delivered
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                    <User className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      €{user.orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
                    </div>
                    <p className="text-xs text-muted-foreground">Lifetime value</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Addresses</CardTitle>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{user.addresses.length}</div>
                    <p className="text-xs text-muted-foreground">Saved addresses</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  {user.orders.length > 0 ? (
                    <div className="space-y-4">
                      {user.orders.slice(0, 3).map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">Order #{order.id}</p>
                            <p className="text-sm text-muted-foreground">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant={order.status === "delivered" ? "default" : "secondary"}>
                              {order.status}
                            </Badge>
                            <p className="text-sm font-medium mt-1">€{order.total.toFixed(2)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No orders yet</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                </CardHeader>
                <CardContent>
                  {user.orders.length > 0 ? (
                    <div className="space-y-6">
                      {user.orders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="font-semibold">Order #{order.id}</h3>
                              <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                            </div>
                            <div className="text-right">
                              <Badge variant={order.status === "delivered" ? "default" : "secondary"}>
                                {order.status}
                              </Badge>
                              <p className="text-lg font-semibold mt-1">€{order.total.toFixed(2)}</p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            {order.items.map((item) => (
                              <div key={item.id} className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-muted rounded-md"></div>
                                <div className="flex-1">
                                  <p className="font-medium">{item.name}</p>
                                  <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                </div>
                                <p className="font-medium">€{(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                            ))}
                          </div>

                          <div className="flex justify-end mt-4">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">No orders yet</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="addresses" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Saved Addresses</CardTitle>
                </CardHeader>
                <CardContent>
                  {user.addresses.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-4">
                      {user.addresses.map((address) => (
                        <div key={address.id} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className="capitalize">
                              {address.type}
                            </Badge>
                            {address.isDefault && <Badge>Default</Badge>}
                          </div>
                          <div className="space-y-1 text-sm">
                            <p className="font-medium">
                              {address.firstName} {address.lastName}
                            </p>
                            <p>{address.address}</p>
                            <p>
                              {address.city}, {address.postalCode}
                            </p>
                            <p>{address.country}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">No addresses saved</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">First Name</label>
                      <p className="text-muted-foreground">{user.firstName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Last Name</label>
                      <p className="text-muted-foreground">{user.lastName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <p className="text-muted-foreground">{user.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Phone</label>
                      <p className="text-muted-foreground">{user.phone || "Not provided"}</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button>
                      <Settings className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
