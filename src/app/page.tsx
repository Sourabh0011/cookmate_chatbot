import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Shoutouts from '@/components/Shoutouts';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import RecipeGrid from '@/components/RecipeGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        
        <Features />
        <Pricing />
        <Shoutouts />
        {/* <RecipeGrid /> */}
      </main>
      <Footer />
    </div>
  );
}
