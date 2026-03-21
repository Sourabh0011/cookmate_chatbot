import Image from 'next/image';

const Shoutouts = () => {
  const logos = [
    { src: '/images/features/book.png', alt: 'bookbazzar', width: 130 },
    { src: '/images/features/kishify.png', alt: 'kirshify', width: 175, hideOnMobile: false },
    { src: '/images/features/limit2.png', alt: 'limitless', width: 135 },
    { src: '/images/features/ycyc.png', alt: 'limitless', width: 145 },
    
  ];

  return (
    <div className="bg-white py-2">
      <div className="max-w-7xl mx-auto grid gap-x-8 gap-y-4 py-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`flex items-center justify-center  ${
              logo.hideOnMobile ? 'hidden sm:flex' : ''
            }`}
          >
            <Image
              src={logo.src}
              width={logo.width}
              height={50} // Approximate height
              alt={logo.alt}
              className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoutouts;
