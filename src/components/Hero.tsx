'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (query.trim()) {
      router.push(`/create?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section className="text-center text-white items-center py-14 bg-gradient-to-br to-purple-950 from-fuchsia-900 dot-bg">
      <div className="max-w-5xl mx-auto px-3 md:px-8">
        <h1 className="text-4xl sm:text-5xl mb-4">
        <b> Create Custom Recipes & Meal Plans </b> 
        </h1>
        <p className="text-lg mb-8">
          Cookmate AI can generate all-new recipes and meal plans on demand.
          Simply enter your ingredients, dietary needs, a recipe idea, or meal
          plan request – Cookmate AI will create something just for you...
        </p>
        <div className="flex flex-col items-center w-full mx-auto">
          <div className="w-full bg-white rounded-3xl overflow-hidden shadow-lg border border-solid border-gray-900">
            <div className="relative px-4 pt-3 pb-2">
              <textarea
                placeholder="help me create a healthy recipe for..."
                rows={2}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent w-full resize-none outline-none border-none text-lg text-gray-800 font-normal h-16 overflow-auto"
              ></textarea>
            </div>
            <div className="border-t border-gray-200 p-3 sm:p-4">
              <div className="hidden sm:flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">tools</span>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all duration-200 cursor-pointer hover:opacity-95 bg-[rgba(233,213,255,0.8)] text-[#6d28d9] border-2 border-[#9333ea] shadow-[0_1px_3px_rgba(124,58,237,0.2)] font-medium">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 416 512"
                        className="text-purple-600 text-xs"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"></path>
                      </svg>
                     <a href="/create" className="text-purple-600 hover:underline-offset-0">
                       recipe creator
                     </a>
                    </div>
                    <div className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all duration-200 cursor-pointer hover:opacity-95 bg-[rgba(254,226,204,0.8)] text-[#c2410c] border-2 border-[#f97316] shadow-[0_1px_3px_rgba(249,115,22,0.2)] font-medium">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-orange-600 text-xs"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                        <path d="M8 14h.01"></path>
                        <path d="M12 14h.01"></path>
                        <path d="M16 14h.01"></path>
                        <path d="M8 18h.01"></path>
                        <path d="M12 18h.01"></path>
                        <path d="M16 18h.01"></path>
                      </svg>
                     <a href="/mealplan" className="text-purple-600 hover:underline-offset-0">
                       meal planner
                     </a>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={!query.trim()}
                  className={`bg-black text-white rounded-full px-6 py-2 flex items-center gap-1 transition-all duration-200 shadow-[0_2px_4px_rgba(0,0,0,0.25)] ${
                    !query.trim() ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
                  }`}
                >
                  submit{' '}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="text-xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="sm:hidden flex flex-col items-center gap-3">
                <button
                  onClick={handleSubmit}
                  disabled={!query.trim()}
                  className={`bg-black text-white rounded-full px-6 py-2 flex items-center justify-center gap-1 transition-all duration-200 w-full shadow-[0_2px_4px_rgba(0,0,0,0.25)] min-w-[120px] ${
                    !query.trim() ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
                  }`}
                >
                  submit{' '}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="text-xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                    ></path>
                  </svg>
                </button>
                <div className="flex items-center justify-center w-full gap-2 px-2">
                  <div className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all duration-200 cursor-pointer hover:opacity-95 flex-1 bg-[rgba(233,213,255,0.8)] text-[#6d28d9] border-2 border-[#9333ea] shadow-[0_1px_3px_rgba(124,58,237,0.2)] font-medium">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 416 512"
                      className="text-purple-600 text-xs"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"></path>
                    </svg>
                    recipe creator
                  </div>
                  <div className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all duration-200 cursor-pointer hover:opacity-95 flex-1 bg-[rgba(254,226,204,0.8)] text-[#c2410c] border-2 border-[#f97316] shadow-[0_1px_3px_rgba(249,115,22,0.2)] font-medium">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-orange-600 text-xs"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                      <path d="M8 14h.01"></path>
                      <path d="M12 14h.01"></path>
                      <path d="M16 14h.01"></path>
                      <path d="M8 18h.01"></path>
                      <path d="M12 18h.01"></path>
                      <path d="M16 18h.01"></path>
                    </svg>
                    meal planner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
