'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-6xl mx-auto py-0 md:py-1 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link className="flex items-center gap-2" href="/">
              <Image
                src="/logo.png"
                alt="Cookmate AI Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-2xl font-black tracking-tight text-gray-900 my-2 flex items-baseline">
                Cookmate <span className="text-purple-600">AI</span>
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-center rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-none border-0 p-2 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 cursor-pointer"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"></path>
                </svg>
              )}
            </button>
          </div>
          <div className="hidden lg:flex items-center space-x-2">
            <Link
              className="block px-3 py-2 rounded font-medium text-base hover:no-underline text-gray-700 hover:text-gray-900"
              href="/create"
            >
              Recipe
            </Link>
            <Link
              className="block px-3 py-2 rounded font-medium text-base hover:no-underline text-gray-700 hover:text-gray-900"
              href="/mealplan"
            >
              Meal Plan
            </Link>
            {/* <Link
              className="block px-3 py-2 rounded font-medium text-base hover:no-underline text-gray-700 hover:text-gray-900"
              href="/recipes"
            >
              Explore
            </Link> */}
            <Link
              className="block px-3 py-2 rounded font-medium text-base hover:no-underline text-purple-700 hover:text-purple-900"
              href="/premium"
            >
              Premium
            </Link>
            <Link
              className="block px-3 py-2 rounded font-medium text-base hover:no-underline text-emerald-600 hover:text-emerald-800"
              href="/business"
            >
              Business
            </Link>
            <Link href="/signup">
              <button className="text-center rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-none border-0 px-4 py-2 text-base bg-purple-600 text-white hover:bg-purple-700 inline-block font-semibold shadow cursor-pointer">
                Sign Up
              </button>
            </Link>
           
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white shadow-inner border-t border-gray-100">
          <Link
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 rounded-xl font-medium text-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
            href="/create"
          >
            Recipe
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 rounded-xl font-medium text-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
            href="/mealplan"
          >
            Meal Plan
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 rounded-xl font-medium text-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
            href="/recipes"
          >
            Explore
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 rounded-xl font-medium text-lg text-purple-700 hover:bg-purple-50 transition-colors"
            href="/premium"
          >
            Premium
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 rounded-xl font-medium text-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
            href="/business"
          >
            Business
          </Link>
          <div className="pt-4 flex flex-col gap-3">
            <button className="w-full text-center rounded-xl font-bold py-3 text-lg bg-purple-600 text-white hover:bg-purple-700 shadow-md transition-all active:scale-95">
              Sign Up
            </button>
            <button className="w-full text-center rounded-xl font-bold py-3 text-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all active:scale-95">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
