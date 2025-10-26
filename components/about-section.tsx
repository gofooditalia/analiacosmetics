"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, Award, Truck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Leaf,
      title: t("about.natural.title"),
      description: t("about.natural.description"),
    },
    {
      icon: Heart,
      title: t("about.cruelty.title"),
      description: t("about.cruelty.description"),
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Each product is crafted with the highest standards to ensure exceptional results.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick shipping across Malta or visit our store in St Paul's Bay for immediate pickup.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">{t("about.title")}</h2>
              <p className="text-lg text-muted-foreground">{t("about.subtitle")}</p>
              <p className="text-muted-foreground">
                Located in the heart of St Paul's Bay, Malta, we've been serving the local community and beyond with
                premium natural beauty products. Our commitment to quality, sustainability, and customer satisfaction
                sets us apart.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/natural-cosmetics-store-interior-with-elegant-disp.png"
                alt="Analia Cosmetics Store"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Store Info Card */}
            <Card className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur">
              <CardContent className="p-4">
                <div className="text-center space-y-2">
                  <h4 className="font-semibold">Visit Our Store</h4>
                  <p className="text-sm text-muted-foreground">
                    345 Tourist St, St Paul's Bay
                    <br />
                    SPB2500, Malta
                  </p>
                  <p className="text-sm font-medium text-primary">+356 79405866</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
