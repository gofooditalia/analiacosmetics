"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Gift } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function NewsletterSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/10 border-0">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-8 max-w-2xl mx-auto">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold">{t("newsletter.title")}</h2>
                <p className="text-lg text-muted-foreground">{t("newsletter.subtitle")}</p>
              </div>

              {/* Incentive */}
              <div className="flex items-center justify-center space-x-2 text-primary">
                <Gift className="h-5 w-5" />
                <span className="font-semibold">Get 10% off your first order!</span>
              </div>

              {/* Newsletter Form */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder={t("newsletter.placeholder")} className="flex-1" />
                <Button className="bg-primary hover:bg-primary/90">{t("newsletter.subscribe")}</Button>
              </div>

              {/* Privacy Note */}
              <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
