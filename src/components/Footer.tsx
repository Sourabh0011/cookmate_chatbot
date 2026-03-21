import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="w-full md:w-7/12 px-3 mb-8 md:mb-0 text-center md:text-left">
            <Link className="inline-flex items-center gap-2 mb-3" href="/">
              <Image
                src="/logo.png"
                alt="Cookmate AI Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-2xl font-black tracking-tight text-white inline-flex items-baseline">
                Cookmate <span className="text-purple-500">AI</span>
                
              </span>
            </Link>
            <p className="text-sm text-gray-300 mt-2">
              Cookmate AI is the revolutionary AI recipe generator. Input your
              ingredients and preferences, and our recipe generator will craft
              unique AI recipes on demand. Explore innovative culinary creations
              and elevate your AI meal plans with Cookmate AI.
            </p>
          </div>
          <div className="w-full md:w-4/12 px-3 flex flex-col items-center md:items-end justify-center">
            <div className="flex flex-col items-center md:items-end">
              <Image
                src="/d.png"
                alt="Signature Logo"
                width={120}
                height={120}
                className="rounded-full border-2 border-purple-500/30 mb-2"
              />
              <span 
                className="text-2xl text-purple-300 select-none whitespace-nowrap" 
                style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
              >
                dolly patel
              </span>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div>
          <p className="m-0 mx-auto text-center text-sm text-gray-400">
            Copyright © Cookmate AI 2026 •{' '}
            <Link className="no-underline text-purple-300 hover:text-purple-500" href="#">
              Terms
            </Link>{' '}
            •{' '}
            <Link className="no-underline text-purple-300 hover:text-purple-500" href="/#">
              Privacy
            </Link>{' '}
            •{' '}
            <Link className="no-underline text-purple-300 hover:text-purple-500" href="#">
              Contact
            </Link>
          </p>
        </div>
        <div className="mt-6 text-xs text-gray-500 flex items-center justify-center">
          <span className="mr-1"> Dev: Sourabh Sharma &nbsp;</span>
          <a
            target="_blank"
            title="Wine Prices & Ratings"
            className="font-semibold text-purple-500 hover:text-purple-600 transition-colors underline"
            href="https://github.com/Sourabh0011"
            rel="noopener noreferrer"
          >
            GithHub – Sourabh0011
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
