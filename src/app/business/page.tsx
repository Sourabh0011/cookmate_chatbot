import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Business() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-emerald-900 to-teal-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-6">
              AI Solutions for Food Brands
            </h1>
            <p className="text-xl mb-10">
              Drive engagement, increase sales, and grow your food brand with
              Cookmate AI's custom AI solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-emerald-900 font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Embeddable AI Widget</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Add a powerful AI recipe generator directly to your website.
                  Engage your visitors with personalized recipe suggestions
                  featuring your products.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✔</span>
                    <span>Customizable to match your brand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✔</span>
                    <span>Promote specific products in recipes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✔</span>
                    <span>Valuable data & insights on user preferences</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center italic text-gray-400">
                Widget Preview Image
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-row-reverse">
              <div className="order-2 md:order-1 bg-gray-100 rounded-2xl p-8 flex items-center justify-center italic text-gray-400">
                Enterprise Platform Image
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6">Enterprise AI Platform</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Scale your content creation with our Pro platform. Generate
                  thousands of unique recipes, meal plans, and food content
                  tailored to your marketing strategy.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✔</span>
                    <span>Commercial usage rights included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✔</span>
                    <span>High-volume generation capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-3 mt-1">✔</span>
                    <span>API access for seamless integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
