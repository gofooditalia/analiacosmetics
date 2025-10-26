import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Heart, Award, Users, Globe, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6">Our Story</Badge>
              <h1 className="text-5xl font-serif font-bold mb-6">Natural Beauty, Naturally Yours</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded in the heart of Malta, Analia Cosmetics is dedicated to bringing you the finest natural beauty
                products that celebrate your unique radiance while caring for our planet.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    At Analia Cosmetics, we believe that true beauty comes from within and should be nurtured with the
                    purest ingredients nature has to offer. Our mission is to create exceptional beauty products that
                    enhance your natural glow while respecting both your skin and the environment.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Every product in our collection is carefully crafted with sustainably sourced, natural ingredients,
                    ensuring that you can feel confident about what you're putting on your skin and its impact on the
                    world around us.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Leaf className="h-24 w-24 mx-auto text-primary mb-4" />
                      <p className="text-lg font-medium">100% Natural Ingredients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold mb-4">Our Values</h2>
                <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Natural & Pure</h3>
                    <p className="text-muted-foreground">
                      We use only the finest natural ingredients, free from harmful chemicals and synthetic additives.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Cruelty-Free</h3>
                    <p className="text-muted-foreground">
                      All our products are cruelty-free and never tested on animals. Beauty should never come at the
                      cost of suffering.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Sustainable</h3>
                    <p className="text-muted-foreground">
                      We're committed to sustainable practices, from eco-friendly packaging to responsible sourcing.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                    <p className="text-muted-foreground">
                      Every product undergoes rigorous testing to ensure the highest quality and effectiveness.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Community</h3>
                    <p className="text-muted-foreground">
                      We believe in building a community of conscious consumers who care about their impact.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                    <p className="text-muted-foreground">
                      We continuously innovate to bring you the latest in natural beauty science and technology.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold mb-4">Our Story</h2>
                <p className="text-lg text-muted-foreground">From a small dream to a growing movement</p>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">2020</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">The Beginning</h3>
                        <p className="text-muted-foreground">
                          Analia Cosmetics was born from a passion for natural beauty and a desire to create products
                          that truly care for both people and the planet. Founded in Malta, we started with a simple
                          mission: to prove that effective beauty products don't need to compromise on natural
                          ingredients or ethical values.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">2022</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Growing Recognition</h3>
                        <p className="text-muted-foreground">
                          Our commitment to quality and sustainability began to gain recognition. We expanded our
                          product line and opened our flagship store in St Paul's Bay, creating a space where customers
                          could experience our products and learn about natural beauty.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">2024</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Looking Forward</h3>
                        <p className="text-muted-foreground">
                          Today, we continue to innovate and expand our reach while staying true to our core values.
                          We're excited about the future and our mission to make natural, sustainable beauty accessible
                          to everyone who believes in the power of nature.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">Join Our Journey</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Discover the difference that natural, ethically-made beauty products can make in your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Shop Our Products
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
