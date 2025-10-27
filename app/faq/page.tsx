import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Frequently Asked Questions</h1>
          
          <p className="text-muted-foreground mb-8">
            Find answers to common questions about Analia Cosmetics products, ordering, and more.
          </p>
          
          <Accordion type="multiple" className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                What makes Analia Cosmetics products different?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Analia Cosmetics products are formulated with natural, high-quality ingredients that are 
                carefully selected for their effectiveness and safety. We avoid harsh chemicals, parabens, 
                and sulfates, focusing instead on botanical extracts, vitamins, and minerals that nourish 
                and protect your skin. All our products are cruelty-free and environmentally conscious.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                Are your products suitable for sensitive skin?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, most of our products are formulated to be gentle and suitable for sensitive skin. 
                However, we always recommend patch testing new products on a small area of skin before 
                full application. If you have specific skin concerns or allergies, please review the 
                ingredient list on each product page or consult with your dermatologist.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                How long does shipping take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Standard shipping typically takes 5-7 business days within Italy, 7-10 business days for 
                other European countries, and 10-15 business days for international orders. We also offer 
                express shipping options at checkout for faster delivery. You'll receive a tracking number 
                once your order ships.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                What is your return policy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer a 30-day return policy for unused products in their original packaging. 
                If you're not satisfied with your purchase, please contact our customer service team 
                to initiate a return. Please note that shipping costs are non-refundable unless the 
                return is due to our error.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                Do you test on animals?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No, Analia Cosmetics is proudly cruelty-free. We do not test our products or ingredients 
                on animals, and we don't work with suppliers who do. We're certified by PETA and 
                Leaping Bunny as a cruelty-free brand.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                How should I store my products?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Store your Analia Cosmetics products in a cool, dry place away from direct sunlight. 
                Avoid extreme temperatures, and always keep lids tightly closed to maintain product 
                freshness. Most products have a shelf life of 24 months after opening, indicated by 
                the PAO (Period After Opening) symbol on the packaging.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                Can I use multiple products from different lines together?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, our products are designed to work harmoniously together. However, we recommend 
                introducing new products gradually to allow your skin to adjust. Start with one new 
                product at a time, waiting a few days before adding another to your routine.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                Do you offer samples?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we offer samples with most orders. You can also purchase sample sets to try 
                multiple products before committing to full sizes. Check our "Samples & Travel Sizes" 
                section for available options.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-9" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                Are your products organic?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Many of our ingredients are organic, and we're working toward full organic certification 
                for our entire product line. Each product page lists the organic ingredients, and we 
                prioritize sourcing from certified organic suppliers whenever possible.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-10" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                How do I track my order?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Once your order ships, you'll receive an email with a tracking number and link to monitor 
                your package. You can also track your order by logging into your account on our website 
                and viewing your order history.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-11" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                Do you offer gift wrapping?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we offer complimentary gift wrapping on all orders. Simply select the gift wrapping 
                option at checkout and add a personalized message. You can also include gift receipts 
                that don't show pricing information.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-12" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, 
                and Google Pay. All transactions are secured with SSL encryption to protect your payment 
                information.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
            <p className="mb-4">
              Our customer service team is here to help with any additional questions you may have.
            </p>
            <div className="space-y-2">
              <p>Email: support@analiacosmetics.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Hours: Monday-Friday, 9am-6pm CET</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}