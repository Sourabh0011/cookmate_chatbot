import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function MealPlan() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <section className="text-center text-white items-center py-14 bg-gradient-to-br from-teal-900 to-emerald-800 dot-bg">
          <div className="max-w-4xl mx-auto px-3 md:px-8">
            <h2 className="text-4xl text-center">Create Your Perfect Meal Plan</h2>
            <p className="text-xl text-center mb-8">
              Tell Cookmate AI what kind of meal plan you need—along with any
              dietary preferences or goals—and we’ll create a custom plan just
              for you.
            </p>
            <div className="flex flex-col items-center w-full mx-auto">
              <div className="w-full bg-white rounded-3xl overflow-hidden shadow-lg border border-solid border-gray-900">
                <div className="relative px-4 pt-3 pb-2">
                  <textarea
                    placeholder="help me create a healthy recipe for..."
                    rows={2}
                    className="bg-transparent w-full resize-none outline-none border-none text-lg text-gray-800 font-normal h-16 overflow-auto"
                  ></textarea>
                </div>
                <div className="border-t border-gray-200 p-3 sm:p-4">
                  <div className="hidden sm:flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">tools</span>
                      <div className="flex gap-2">
                        <div className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all duration-200 cursor-pointer hover:opacity-95 bg-[#e5e7eb] text-[#4b5563] border-2 border-[#cccccc] shadow-none font-normal">
                          recipe creator
                        </div>
                        <div className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all duration-200 cursor-pointer hover:opacity-95 bg-[rgba(254,226,204,0.8)] text-[#c2410c] border-2 border-[#f97316] shadow-[0_1px_3px_rgba(249,115,22,0.2)] font-medium">
                          meal planner
                        </div>
                      </div>
                    </div>
                    <div className="bg-black text-white rounded-full px-6 py-2 flex items-center gap-1 transition-all duration-200 opacity-50 cursor-not-allowed shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                      submit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br to-orange-800 from-amber-600 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-extrabold text-white mb-2">
                Meal Planning Revolutionized
              </h1>
              <p className="text-lg text-white mx-auto max-w-3xl">
                Stop spending hours figuring out what to make. Cookmate AI's AI
                meal planner creates personalized, balanced plans based on your
                dietary needs, preferences, and goals—all in seconds.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Describe Your Idea',
                  desc: 'Use our AI chat interface to describe your ideal meal plan. Include dietary preferences, goals, etc. – the more you share, the more personalized your plan will be.',
                  bg: 'bg-amber-100',
                  color: 'text-amber-600',
                },
                {
                  title: 'Get Your Custom Plan',
                  desc: 'Within seconds, receive a detailed meal plan for 3 - 7 days. Each meal is carefully selected to match your requirements and can be edited just by asking in the chat.',
                  bg: 'bg-emerald-100',
                  color: 'text-emerald-600',
                },
                {
                  title: 'Generate Recipes Instantly',
                  desc: 'The real magic: with one click, Cookmate AI can create full recipes for any meal in your plan. Edit, customize, and swap dishes until your plan is perfect.',
                  bg: 'bg-purple-100',
                  color: 'text-purple-600',
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow py-8 px-4 flex flex-col items-center text-center justify-between"
                >
                  <div>
                    <div
                      className={`w-20 h-20 mx-auto ${step.bg} rounded-full flex items-center justify-center mb-4`}
                    >
                      <span className={`text-3xl ${step.color}`}>Step {i + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-500">{step.desc}</p>
                  </div>
                  <div className="w-full h-48 bg-gray-100 rounded-md mt-6 flex items-center justify-center text-gray-400 italic">
                    Image Placeholder
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center py-14 bg-gradient-to-br from-teal-900 to-emerald-800">
          <div className="bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl py-12 px-8 md:px-20 max-w-5xl w-full border-2 border-teal-400/30">
            <div className="flex flex-col items-center mb-8">
              <div className="text-teal-100 uppercase mt-2 text-base opacity-80 font-medium text-center">
                Meal planning made simple
              </div>
              <h3 className="text-3xl font-extrabold text-emerald-100 mb-0 drop-shadow">
                Getting the Most Out of AI Meal Planning
              </h3>
              <div className="w-16 border-b-4 border-emerald-300 mt-3"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <ul className="space-y-4">
                {[
                  {
                    title: 'Specify your goals:',
                    text: 'Whether it\'s weight loss, muscle building, or saving money, tell Cookmate AI so your plan aligns with your objectives.',
                  },
                  {
                    title: 'Include dietary restrictions:',
                    text: 'Mention allergies, intolerances, or diet plans to ensure every meal is safe and appropriate.',
                  },
                  {
                    title: 'Request meal variety:',
                    text: 'Ask for diverse cuisines or specify if you want easy meal prep, one-pot dishes, or quick weeknight options.',
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-white">
                    <span className="text-green-400 mr-3 mt-1">✔</span>
                    <span>
                      <strong>{item.title}</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Mention your budget:',
                    text: 'Cookmate AI can optimize meal plans to be cost-effective while still being delicious and nutritious.',
                    type: 'check',
                  },
                  {
                    title: 'Don\'t be too rigid:',
                    text: 'Allow some flexibility in your request to let our AI create the most balanced and creative meal plan for you.',
                    type: 'cross',
                  },
                  {
                    title: 'Don\'t forget to modify:',
                    text: 'After creating your plan, view and edit it in your account to swap meals, make manual edits, and even generate the suggested recipes with AI.',
                    type: 'cross',
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-white">
                    <span
                      className={`mr-3 mt-1 ${
                        item.type === 'check' ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {item.type === 'check' ? '✔' : '✗'}
                    </span>
                    <span>
                      <strong>{item.title}</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
