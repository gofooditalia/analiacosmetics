import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing and using Analia Cosmetics' website, you accept and agree to be bound by the 
              terms and provision of this agreement. If you do not agree to abide by the above, please 
              do not use this service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials on Analia Cosmetics' 
              website for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Product Information</h2>
            <p className="mb-6">
              We make every effort to display as accurately as possible the colors, features, specifications, 
              and details of the products available on our website. However, we do not guarantee that the 
              colors, features, specifications, and details of the products will be accurate, complete, 
              reliable, current, or free of other errors.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Pricing and Availability</h2>
            <p className="mb-6">
              All prices are shown in EUR and are subject to change without notice. We reserve the right 
              to modify or discontinue a product at any time. We are not liable to you or to any third-party 
              for any modification, price change, suspension, or discontinuance of a product.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Orders and Payment</h2>
            <p className="mb-6">
              By placing an order through our website, you offer to purchase a product subject to the 
              following terms and conditions. All orders are subject to availability and confirmation of 
              the order price. Payment must be received by us before we accept your order.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Shipping and Delivery</h2>
            <p className="mb-6">
              We will make every effort to deliver products within the estimated timescales. However, 
              delivery times are estimates and cannot be guaranteed. We are not liable for any delays 
              in shipments.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Returns and Refunds</h2>
            <p className="mb-6">
              Our return policy is detailed on our Returns page. By using our website, you agree to 
              comply with our return policy.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Privacy</h2>
            <p className="mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs 
              the site and informs users of our data collection practices.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Disclaimer</h2>
            <p className="mb-6">
              The materials on Analia Cosmetics' website are provided on an 'as is' basis. Analia Cosmetics 
              makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
              including without limitation, implied warranties or conditions of merchantability, fitness for 
              a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Limitations</h2>
            <p className="mb-6">
              In no event shall Analia Cosmetics or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use the materials on Analia Cosmetics' website.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Governing Law</h2>
            <p className="mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of 
              Italy and you irrevocably submit to the exclusive jurisdiction of the courts in that State 
              or location.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Changes to Terms</h2>
            <p className="mb-6">
              Analia Cosmetics may revise these terms of service for its website at any time without notice. 
              By using this web site, you are agreeing to be bound by the then current version of these 
              terms of service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Information</h2>
            <p className="mb-4">
              Questions about the Terms of Service should be sent to us at:
            </p>
            <p className="mb-2">
              Email: legal@analiacosmetics.com
            </p>
            <p>
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}