import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p className="mb-4">
              At Analia Cosmetics, we collect information to provide better services to all our users. 
              The types of information we collect include:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Shipping and billing address</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Browser and device information</li>
              <li>Usage data and preferences</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Process and fulfill your orders</li>
              <li>Provide customer support</li>
              <li>Send you transactional emails</li>
              <li>Improve our products and services</li>
              <li>Communicate with you about promotions and new products (with your consent)</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except in the following cases:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Trusted third-party service providers who assist us in operating our website</li>
              <li>When required by law or to protect our rights</li>
              <li>With your explicit consent</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
            <p className="mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. All payment transactions are 
              processed through secure third-party payment processors.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
            <p className="mb-6">
              We use cookies to enhance your experience on our website. Cookies help us remember your 
              preferences, track usage patterns, and provide personalized content. You can choose to 
              disable cookies through your browser settings.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-2">
              Email: privacy@analiacosmetics.com
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