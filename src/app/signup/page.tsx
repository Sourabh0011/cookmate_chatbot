"use client";

import React, { useState } from 'react';
import { 
  Coins, 
  History, 
  Bookmark, 
  Mail, 
  Apple, 
  ArrowLeft, 
  UserPlus, 
  LogIn 
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import  Navbar  from '@/components/Navbar';
import { div } from 'framer-motion/client';

// --- Sub-component for Feature Items ---
const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex gap-4"
  >
    <div className="shrink-0 mt-1">{icon}</div>
    <div>
      <h3 className="text-xl font-bold mb-1 text-white">{title}</h3>
      <p className="text-purple-100/70 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans overflow-x-hidden">
    <Navbar />
    <div className="bg-[#0a0a0a] min-h-screen font-sans overflow-x-hidden">
      {/* LAYOUT STRATEGY:
          - Mobile: flex-col-reverse (Right section/Form appears first)
          - Desktop: md:flex-row (Left section/Features appears first)
      */}
      <div className="min-h-screen w-full flex flex-col-reverse md:flex-row">
        
        {/* LEFT SECTION: Features & Branding */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-[#5b21b6] via-[#7c3aed] to-[#4c1d95] p-8 md:p-16 flex flex-col justify-center relative">
          
          {/* Back Button - Desktop Only */}
          <div className="absolute top-8 left-8 hidden md:block">
            <Link href="/" className="text-purple-200 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
              <ArrowLeft size={18} /> Back to Home
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto md:mx-0"
          >
            <h1 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
              {isLogin ? "Welcome Back to Cookmate AI" : "Create A Cookmate AI Account"}
            </h1>
            
            <p className="text-purple-100 mb-12 text-lg leading-relaxed">
              <span className="font-bold text-white">Cookmate AI Basic</span> is free forever. 
              Unlock the power of AI-driven culinary creativity today.
            </p>

            <div className="space-y-10">
              <FeatureItem 
                icon={<Coins className="text-yellow-400" size={32} />}
                title="15 Weekly Credits"
                desc="Generate and edit professional recipes every week at no cost."
              />
              <FeatureItem 
                icon={<History className="text-emerald-400" size={32} />}
                title="Sync Across Devices"
                desc="Your recipe history and meal plans follow you from kitchen to grocery store."
              />
              <FeatureItem 
                icon={<Bookmark className="text-pink-300" size={32} />}
                title="Smart Bookmarks"
                desc="Save your most successful AI creations into a beautiful personal digital cookbook."
              />
            </div>
          </motion.div>
        </div>

        {/* RIGHT SECTION: Auth Form */}
        <div className="w-full md:w-1/2 bg-[#0a0a0a] flex items-center justify-center p-6 relative overflow-hidden min-h-[550px] md:min-h-screen">
          
          {/* Subtle Background UI Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '32px 32px' }}
          />

          <motion.div 
            layout
            className="w-full max-w-md bg-[#161616] rounded-3xl p-8 md:p-10 border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? "login-mode" : "signup-mode"}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {isLogin ? "Sign In" : "Join Cookmate"}
                  </h2>
                  <p className="text-white/40 text-sm">
                    {isLogin ? "Enter your details to continue" : "Start your 100% free account"}
                  </p>
                </div>
                
                <div className="space-y-4">
                  {/* Social Providers */}
                  <button className="w-full bg-[#ea4335] hover:bg-[#d33426] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
                    <span className="bg-white text-[#ea4335] rounded-full p-0.5 text-[10px] font-black w-5 h-5 flex items-center justify-center">G</span>
                    {isLogin ? "Sign in with Google" : "Connect with Google"}
                  </button>
                  
                  <button className="w-full bg-white hover:bg-gray-200 text-black py-3.5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
                    <Apple size={20} fill="black" />
                    {isLogin ? "Sign in with Apple" : "Connect with Apple"}
                  </button>

                  <div className="flex items-center gap-4 py-3">
                    <div className="h-[1px] flex-1 bg-white/10"></div>
                    <span className="text-white/20 text-xs font-bold uppercase tracking-widest">or</span>
                    <div className="h-[1px] flex-1 bg-white/10"></div>
                  </div>

                  {/* Manual Form */}
                  <div className="space-y-4">
                      <input 
                        type="email" 
                        placeholder="email@example.com" 
                        className="w-full bg-[#222] border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all placeholder:text-white/20"
                      />

                      <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-purple-900/20 active:scale-[0.98]">
                        <Mail size={18} />
                        Continue with Email
                      </button>
                  </div>

                  {/* Mode Toggle Switcher */}
                  <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <p className="text-white/40 text-sm mb-3">
                      {isLogin ? "New to the kitchen?" : "Already have an account?"}
                    </p>
                    <button 
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-purple-400 hover:text-purple-300 font-bold flex items-center justify-center gap-2 mx-auto px-6 py-2 rounded-full border border-purple-400/20 hover:bg-purple-400/10 transition-all"
                    >
                      {isLogin ? (
                        <><UserPlus size={16} /> Create Account</>
                      ) : (
                        <><LogIn size={16} /> Sign In</>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <p className="text-center text-[11px] text-white/30 mt-8 leading-relaxed">
              By joining, you agree to our 
              <Link href="/terms" className="underline mx-1 hover:text-white">Terms of Service</Link> 
              and 
              <Link href="/privacy" className="underline ml-1 hover:text-white">Privacy Policy</Link>.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AuthPage;