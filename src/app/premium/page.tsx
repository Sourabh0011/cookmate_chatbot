import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';

export default function Premium() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-purple-900 to-fuchsia-900 text-white py-20 px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-6">Experience DishGen Premium</h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Unlock the full potential of AI-powered cooking with Nearly-unlimited
            usage, a personalized AI model, and more.
          </p>
        </section>
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
