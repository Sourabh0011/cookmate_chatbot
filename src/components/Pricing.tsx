import { Link } from "lucide-react";

const Pricing = () => {
  return (
    <section className="bg-black pt-16 pb-8 px-2 mt-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
          Choose Your Plan
        </h2>
        <p className="text-lg text-gray-300 text-center mb-8 max-w-4xl mx-auto">
          Cookmate AI Basic accounts are free. Upgrade to Premium or Pro to unlock
          nearly-unlimited usage, a personalized AI model, and much more. Start
          your free trial and experience the future of cooking.
        </p>
        <div className="flex justify-center items-center mb-0">
          <span className="text-base font-medium text-gray-400 mr-3">Monthly</span>
          <button
            type="button"
            className="relative w-14 h-7 bg-gray-700 rounded-full transition outline-none border-2 border-solid border-gray-600 flex-shrink-0 shadow-inner focus:ring-2 focus:ring-purple-400"
          >
            <span
              className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-amber-400 rounded-full shadow-md transition-all"
              style={{ left: 'calc(100% - 1.54rem)' }}
            ></span>
          </button>
          <span className="text-base font-medium text-white ml-3">Annual</span>
        </div>
        <p className="text-center text-amber-300 mb-4 mt-2 text-sm font-bold">
          Save 25% with Annual Plans
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Basic Plan */}
          <div className="flex-1 bg-opacity-50 rounded-3xl p-8 flex flex-col border border-gray-700 relative min-h-[540px] mx-4 md:mx-0">
            <div className="flex items-center mb-4 mx-auto">
              <span className="bg-gray-700 text-white px-4 py-1 rounded-full text-md font-semibold mr-2">
                Basic
              </span>
              <span className="text-gray-400 font-medium text-sm">Free Forever</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-left">
              Try the Basics
            </h3>
            <ul className="text-gray-200 space-y-2 text-base mb-8 w-full p-0 ml-5 list-disc">
              <li>
                <span className="font-semibold">
                  Limited usage credits<br />
                  <span className="text-xs font-semibold">resets weekly</span>
                </span>
              </li>
              <li>Save Your Recipes, Plans, and Favorites</li>
              <li>Basic AI chat with recipe & meal plan tools</li>
            </ul>
            <div className="flex-1"></div>
            <Link 
  href="/signup" 
  className="block w-full text-center font-semibold py-3 rounded-xl shadow-md text-lg transition-all"
>
  Create Free Account
</Link>
          </div>

          {/* Premium Plan */}
          <div className="flex-1 bg-gradient-to-br from-purple-900 to-fuchsia-900 rounded-3xl p-8 flex flex-col border border-purple-700 relative min-h-[540px] mx-4 md:mx-0">
            <div className="flex items-center mb-4 mt-0 mx-auto">
              <span className="bg-gradient-to-r from-purple-700 to-fuchsia-700 text-white px-4 py-1 rounded-full text-md font-semibold mr-2">
                Premium
              </span>
              <span className="text-purple-200 font-medium text-sm">7 Days Free</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-left">
              Cookmate AI Premium
            </h3>
            <ul className="text-gray-200 space-y-2 text-base mb-8 w-full p-0 ml-5 list-disc">
              <li>
                <span className="font-semibold">
                  25x more usage credits<br />
                  <span className="text-xs font-semibold">
                    nearly unlimited • resets daily
                  </span>
                </span>
              </li>
              <li>Personalized AI model</li>
              <li>Longer chat context</li>
              <li>
                Advanced meal planner<br />
                <span className="text-xs font-semibold">
                  generate recipes within plans
                </span>
              </li>
              <li>Edit existing recipes with AI</li>
              <li>Ad-free experience</li>
            </ul>
            <div className="flex-1"></div>
            <div className="w-full flex flex-col items-center mt-8">
              <div className="text-3xl font-extrabold text-white mb-2">
                $72<span className="text-base font-normal ml-1">/year</span>
              </div>
              <button className="w-full font-semibold py-3 rounded-xl shadow-md text-lg transition duration-200 border-none bg-gradient-to-r from-purple-700 to-fuchsia-700 hover:from-purple-800 hover:to-fuchsia-800 text-white mt-2 cursor-pointer">
                Register to Start
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="flex-1 bg-gradient-to-br to-emerald-900 from-emerald-800 rounded-3xl p-8 flex flex-col border border-gray-700 relative min-h-[540px] mx-4 md:mx-0">
            <div className="flex items-center mb-4 mx-auto">
              <span className="bg-emerald-700 text-white px-4 py-1 rounded-full text-md font-semibold mr-2">
                Pro
              </span>
              <span className="text-emerald-200 font-medium text-sm">7 Days Free</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-left">
              Business & Power Users
            </h3>
            <ul className="text-gray-200 space-y-2 text-base mb-8 w-full p-0 ml-5 list-disc">
              <li>
                <strong>Commercial Rights</strong><br />
                <span className="text-xs font-semibold">
                  redistribute recipes & plans
                </span>
              </li>
              <li>Even Higher Usage Limits</li>
              <li>Generate AI Images of Recipes</li>
              <li>Privacy Mode</li>
              <li>Everything in Premium</li>
            </ul>
            <div className="flex-1"></div>
            <div className="w-full flex flex-col items-center mt-8">
              <div className="text-3xl font-extrabold text-white mb-2">
                $159<span className="text-base font-normal ml-1">/year</span>
              </div>
              <button className="w-full font-semibold py-3 rounded-xl shadow-md text-lg transition duration-200 border-none bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-white mt-2 cursor-pointer">
                Register to Start
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-6 text-sm">
          cancel anytime – no obligation, no hidden fees
        </div>
        <p className="text-center text-white mt-6">
          <strong>
            Add a Cookmate AI Recipe Generator to your website with our easy-install
            widget{' '}
            <a className="text-amber-300" href="/widget">
              Learn More »
            </a>
          </strong>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
