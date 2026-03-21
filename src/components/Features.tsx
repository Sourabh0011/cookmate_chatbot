
'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

const Features = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <section className="bg-gradient-to-br to-purple-950 from-neutral-800 pb-12 pt-10">
        <div className="max-w-4xl mx-auto text-center px-4 mb-16">
          <div className="flex items-center justify-center mb-2">
            <div>
              <div className="bg-transparent pt-6 pb-2">
                <div className="text-center mb-2">
                  <span className="text-amber-300 uppercase tracking-widest font-bold text-sm">
                    OVER <u>200 MILLION</u> AI RECIPES CREATED
                  </span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow inline-block">
                Your Personalized AI Kitchen{' '}
                <span className="bg-gradient-to-r from-pink-400 to-violet-300 bg-clip-text text-transparent">
                  Copilot
                </span>
              </h1>
            </div>
          </div>
          <p className="text-2xl text-purple-100 mb-8 font-medium">
            Instantly generate custom recipes and meal plans, tailored to your
            tastes, goals, and lifestyle—just by chatting with your own AI chef.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-2">
            {[
              'Save Time',
              'Reduce Food Waste',
              'Eat Healthier',
              'Reach Your Goals',
            ].map((tag, i) => (
              <span
                key={i}
                className={`font-semibold px-4 py-2 rounded-full text-base ${
                  i === 0
                    ? 'bg-amber-400/20 text-amber-200'
                    : i === 1
                    ? 'bg-purple-700/40 text-purple-100'
                    : i === 2
                    ? 'bg-emerald-400/20 text-emerald-100'
                    : 'bg-fuchsia-400/20 text-fuchsia-100'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="max-w-md mx-auto px-4 mb-12">
          <div
            onClick={togglePlay}
            className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-2xl border-4 border-solid border-fuchsia-500/60"
          >
            <div className="aspect-[9/16] bg-gray-900 flex items-center justify-center">
              <video
                ref={videoRef}
                src="/d_cook.mp4"
                className="w-full h-full object-cover"
                playsInline
                onEnded={() => setIsPlaying(false)}
              />
            </div>
            {!isPlaying && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                <span className="bg-gradient-to-br from-fuchsia-500 to-purple-700 w-20 h-20 rounded-full shadow-xl border-4 border-white/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="w-8 h-8 ml-1 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                  </svg>
                </span>
                <span className="mt-6 bg-black/70 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg backdrop-blur">
                  Watch: How It Works
                </span>
              </div>
            )}
          </div>
        </div>

        {/* AI Recipe Generator */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20 px-4">
          <div className="flex-1 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl pt-12 pb-4 px-6 md:px-12 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-3">AI Recipe Generator</h2>
            <p className="text-lg text-purple-100 mb-4">
              Describe any idea or ingredient list and Cookmate AI instantly
              creates a unique recipe just for you. No more endless searching or
              boring repeats.
            </p>
            <ul className="list-disc text-purple-100 space-y-3 text-md ml-5">
              <li>
                Turn leftovers or pantry items into delicious meals to{' '}
                <span className="font-semibold">save money and reduce waste</span>
              </li>
              <li>Request substitutions, new cuisines, or dietary tweaks—just ask in chat</li>
              <li>Save, remix, and share your favorite creations</li>
              <li>Never run out of inspiration again</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-96 h-96 rounded-2xl overflow-hidden border-4 border-amber-300/40 shadow-xl">
              <Image
                src="/images/res1.png"
                alt="AI Recipe Generator"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* AI Meal Planner */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 mb-20 px-4">
          <div className="flex-1 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl pt-12 pb-4 px-6 md:px-12 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-3">AI Meal Planner</h2>
            <p className="text-lg text-purple-100 mb-4">
              Achieve your goals with a meal plan built for you. Whether it’s
              weight loss, muscle gain, or eating on a budget, just tell Cookmate
              AI what you want.
            </p>
            <ul className="list-disc text-purple-100 space-y-2 text-md ml-5">
              <li>Get a full week of meals, tailored to your preferences and schedule</li>
              <li>Generate AI recipes for any meal in your plan – instantly</li>
              <li>Edit, swap, and customize meals easily from your account</li>
              <li>Stay on track and save time every week</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-96 h-96 rounded-2xl overflow-hidden border-4 border-emerald-300/40 shadow-xl">
              <Image
                src="/images/res2.png"
                alt="AI Meal Planner"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Kitchen Coach */}
        <div className="mx-4 md:mx-12">
          <div className="max-w-6xl mx-auto my-8 bg-gradient-to-br from-purple-900/90 to-fuchsia-900/80 rounded-3xl shadow-2xl pt-16 px-6 md:px-20 pb-16">
            <div className="text-center">
              <span className="text-amber-200 font-bold uppercase text-sm tracking-widest mb-2 block">
                NOW WITH PERSONALIZED PROFILES
              </span>
            </div>
            <h3 className="text-4xl font-extrabold text-white mb-4 text-center">
              The AI-Powered Kitchen Coach Built for{' '}
              <span className="text-amber-200 underline">YOU</span>
            </h3>
            <p className="text-purple-100 text-lg mb-10 text-center max-w-3xl mx-auto">
              Imagine an AI that truly knows you—your tastes, your dietary needs,
              your goals, and your kitchen. <strong>Cookmate AI’s personalized AI
              profile feature turns our AI model into your intelligent kitchen
              coach</strong>, always ready to help you eat better, save time, and
              reach your goals.
            </p>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 flex flex-col items-center">
                <div className="relative w-full max-w-md aspect-[1000/1083] rounded-2xl overflow-hidden border-4 border-purple-400/30 shadow-2xl">
                  <Image
                    src="/images/res3.png"
                    alt="Kitchen Coach"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="flex-1">
                <ul className="list-disc list-inside text-purple-100 space-y-3 text-lg mb-6">
                  <li>
                    <span className="font-bold">Reach Your Goals</span>
                    <span className="block text-base ml-4">
                      Whether it’s eating healthier, building muscle, or saving
                      money, your AI adapts to your needs and keeps you on track.
                    </span>
                  </li>
                  <li>
                    <span className="font-bold">Get Smarter Suggestions</span>
                    <span className="block text-base ml-4">
                      Your AI chef recommends meal plans and recipes that fit your
                      diet, lifestyle, budget, and more—no more generic results.
                    </span>
                  </li>
                  <li>
                    <span className="font-bold">Save Time</span>
                    <span className="block text-base ml-4">
                      Skip the planning and searching. Your AI already knows your
                      preferences and delivers ideas that work for you,
                      instantly.
                    </span>
                  </li>
                  <li>
                    <span className="font-bold">Reduce Food Waste</span>
                    <span className="block text-base ml-4">
                      Get creative ideas for what’s in your fridge, so you use
                      more and waste less.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
