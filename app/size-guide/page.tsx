import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Size Guide</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Find your perfect fit with our comprehensive size guide for all Analia Cosmetics products.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Product Sizes</h2>
            <p className="mb-6">
              At Analia Cosmetics, we offer our products in various sizes to suit your needs and preferences.
            </p>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Product Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Size Options</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Face Creams</td>
                    <td className="border border-gray-300 px-4 py-2">15ml, 30ml, 50ml</td>
                    <td className="border border-gray-300 px-4 py-2">Daily moisturizing</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Serums</td>
                    <td className="border border-gray-300 px-4 py-2">10ml, 30ml</td>
                    <td className="border border-gray-300 px-4 py-2">Targeted treatment</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Body Lotions</td>
                    <td className="border border-gray-300 px-4 py-2">100ml, 200ml, 400ml</td>
                    <td className="border border-gray-300 px-4 py-2">Full body hydration</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Face Masks</td>
                    <td className="border border-gray-300 px-4 py-2">Single use, Box of 5</td>
                    <td className="border border-gray-300 px-4 py-2">Weekly treatment</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Lip Products</td>
                    <td className="border border-gray-300 px-4 py-2">3.5g, 5g</td>
                    <td className="border border-gray-300 px-4 py-2">Daily lip care</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How to Choose the Right Size</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">For First-Time Users</h3>
            <p className="mb-4">
              If you're trying our products for the first time, we recommend starting with our travel or 
              sample sizes (15ml for creams, 10ml for serums) to ensure the product works well with your skin type.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">For Daily Use</h3>
            <p className="mb-4">
              For products you'll use daily, our standard sizes (30ml for face products, 200ml for body products) 
              offer the best value and typically last 2-3 months with regular use.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">For Travel</h3>
            <p className="mb-6">
              Our 15ml and 30ml sizes are perfect for travel and comply with most airline regulations for 
              carry-on liquids.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Product Usage Guidelines</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3">Face Creams & Moisturizers</h3>
              <ul className="list-disc pl-6">
                <li>15ml: Approximately 3-4 weeks of daily use</li>
                <li>30ml: Approximately 2-3 months of daily use</li>
                <li>50ml: Approximately 4-5 months of daily use</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3">Serums & Treatments</h3>
              <ul className="list-disc pl-6">
                <li>10ml: Approximately 1-2 months of daily use</li>
                <li>30ml: Approximately 3-4 months of daily use</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3">Body Products</h3>
              <ul className="list-disc pl-6">
                <li>100ml: Approximately 1 month of daily use</li>
                <li>200ml: Approximately 2-3 months of daily use</li>
                <li>400ml: Approximately 5-6 months of daily use</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Tips for Product Longevity</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Store products in a cool, dry place away from direct sunlight</li>
              <li>Always use clean hands or applicators to avoid contamination</li>
              <li>Keep lids tightly closed when not in use</li>
              <li>Use the recommended amount - a little goes a long way with our concentrated formulas</li>
              <li>Check the expiration date on the packaging</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Need Help?</h2>
            <p className="mb-4">
              If you're unsure about which size to choose or need personalized recommendations, 
              our beauty consultants are here to help.
            </p>
            <p className="mb-2">
              Email: help@analiacosmetics.com
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