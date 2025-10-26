"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-secondary/10 to-background overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wide">Natural Beauty</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                {t("hero.title").split(", ")[0]}
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {t("hero.title").split(", ")[1]}
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">{t("hero.subtitle")}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                {t("hero.learnMore")}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <img
                src="/elegant-woman-applying-natural-skincare-cream--sof.png"
                alt="Natural skincare products"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-secondary/20 backdrop-blur-sm rounded-full p-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary/20 backdrop-blur-sm rounded-full p-6">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">Malta</div>
                <div className="text-xs text-muted-foreground">Local Store</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
