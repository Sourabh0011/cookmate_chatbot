import React from 'react';
import { Coins, History, Bookmark, Mail, Apple, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex gap-4">
    <div className="shrink-0 mt-1">{icon}</div>
    <div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-purple-100/70 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const AuthPage = () => {
  return (
    
     
    <div className="bg-[#0a0a0a] border-b border-white/10">

      <Navbar />
    <div className="min-h-screen w-full flex flex-col md:flex-row font-sans">
      
      {/* Back button for mobile */}
      <div className="md:hidden p-4 bg-[#5b21b6]">
        <Link href="/" className="text-white flex items-center gap-2 text-sm font-medium">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      {/* LEFT SECTION: Features & Branding */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-[#5b21b6] via-[#7c3aed] to-[#4c1d95] p-8 md:p-16 flex flex-col justify-center text-white relative">
        {/* Back button for desktop */}
        <div className="hidden md:block absolute top-8 left-8">
            <Link href="/" className="text-purple-200 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
                <ArrowLeft size={18} /> Back to Home
            </Link>
        </div>

        <h1 className="text-4xl font-black mb-6 tracking-tight">
          Create A Cookmate AI Account
        </h1>
        
        <p className="text-purple-100 mb-12 max-w-md leading-relaxed">
          <span className="font-bold">Cookmate AI Basic</span> accounts are free forever with limited usage. 
          Upgrade anytime to unlock nearly-unlimited usage, a personalized AI model, and more.
        </p>

        {/* Feature List */}
        <div className="space-y-10">
          <FeatureItem 
            icon={<Coins className="text-yellow-400" size={32} />}
            title="15 Weekly Credits"
            desc="Create a free account to receive 15 credits every week – each time you generate / edit a recipe or meal plan, it uses one credit."
          />
          <FeatureItem 
            icon={<History className="text-emerald-400" size={32} />}
            title="Recipe & Plan History"
            desc="All your creations are saved in your account. Access your full history anytime, from any device. Easily edit & print."
          />
          <FeatureItem 
            icon={<Bookmark className="text-yellow-200" size={32} />}
            title="Bookmark & Favorites"
            desc="Save your favorite recipes and meal plans with a tap. Organize your personal cookbook in one place."
          />
        </div>
      </div>

      {/* RIGHT SECTION: Login Form */}
      <div className="w-full md:w-1/2 bg-[#0a0a0a] flex items-center justify-center p-6 relative overflow-hidden">
        {/* Subtle background dots pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="w-full max-w-md bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 shadow-2xl z-10">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Login / Register</h2>
          
          <div className="space-y-4">
            {/* Social Buttons */}
            <button className="w-full bg-[#ea4335] hover:bg-[#d33426] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-3 transition-colors">
              <span className="bg-white text-[#ea4335] rounded-full p-0.5 text-xs font-bold w-5 h-5 flex items-center justify-center">G</span>
              Connect with Google
            </button>
            
            <button className="w-full bg-[#111111] hover:bg-black text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-3 border border-white/10 transition-colors">
              <Apple size={20} fill="white" />
              Connect with Apple
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-4">
              <div className="h-[1px] flex-1 bg-white/10"></div>
              <span className="text-white/40 text-sm">or</span>
              <div className="h-[1px] flex-1 bg-white/10"></div>
            </div>

            {/* Email Input */}
            <div className="space-y-4">
                <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full bg-[#262626] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-white/30"
                />

                <button className="w-full bg-[#a855f7] hover:bg-[#9333ea] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-3 transition-colors shadow-lg shadow-purple-500/20">
                    <Mail size={20} />
                    Continue with Email
                </button>
            </div>
          </div>

          <p className="text-center text-xs text-white/40 mt-6 leading-relaxed">
            By continuing, you agree to our 
            <Link href="/terms" className="underline ml-1">terms of use</Link> and 
            <Link href="/privacy" className="underline ml-1">privacy policy</Link>.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AuthPage;
