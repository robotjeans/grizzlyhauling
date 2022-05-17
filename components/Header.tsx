import Link from 'next/link';
import { FunctionComponent, useEffect, useState } from 'react';

const Header: FunctionComponent = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setScrolled(window.pageYOffset > 200)
      );
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`sticky left-0 top-0 right-0 transition-all duration-200 ease-in-out bg-transparent z-50 lg:py-6 py-2 ${
        scrolled ? 'bg-white lg:py-2' : ''
      }`}
    >
      <div className="container">
        <div className="flex justify-between w-full h-full">
          <div className="mr-12 lg:justify-center md:flex">
            <div className="inline-flex items-center h-16 md:justify-between md:h-20">
              <Link href="/">
                <a className="block w-32 contain">Link A</a>
              </Link>
            </div>
          </div>
          <div className="items-center flex-grow hidden lg:flex"></div>
          <div className="items-center justify-end hidden space-x-4 lg:flex">
            <Link href="tel:7579937283">
              <a className="w-auto py-3 font-semibold whitespace-pre hover:underline">
                <span className="pr-5 border-r text-red-600 border-grey">
                  (757) 993-7283
                </span>
              </a>
            </Link>
            <button
              type="button"
              className="block w-full rounded-md border border-transparent px-5 py-3 bg-red-600 text-base font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:px-10"
            >
              Book Now
            </button>
          </div>
          <div className="z-50 flex items-center justify-center lg:hidden">
            <button className="z-50 flex items-center cursor-pointer focus:outline-none tg-hamburger">
              <div className="relative inline-block align-middle">
                <span className="absolute left-0 bg-black rounded-none"></span>
                <span className="absolute left-0 bg-black rounded-none"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
