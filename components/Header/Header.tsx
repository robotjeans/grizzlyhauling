import Link from 'next/link';
import Image from 'next/image'
import { FunctionComponent, useEffect, useState } from 'react';
import clsx from 'clsx';
import classes from './Header.module.css';

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
      className={clsx(classes.header, {
        [classes.hide]: scrolled,
        [classes.show_bg]: scrolled,
      })}
    >
      <div className="flex justify-between w-full h-full">
        <div className="mr-12 lg:justify-center md:flex">
          <div className="inline-flex items-center h-16 md:justify-between md:h-20">
            <Link href="/">
              <a className="block w-32 contain">
              <Image
                  src="/img/logo.svg"
                  alt="Grizzly Hauling Logo"
                  width={200}
                  height={120}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="items-center flex-grow hidden lg:flex"></div>
        <div className="items-center justify-end hidden space-x-4 lg:flex">
          <Link href="tel:7579937283">
            <a className="w-auto py-3 font-semibold whitespace-pre hover:underline">
              <span className="pr-5 border-r text-white border-grey">
                (757) 993-7283
              </span>
            </a>
          </Link>
          <button
            type="button"
            className={clsx(classes.button)}
            aria-label="Book Now"
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
    </header>
  );
};

export default Header;
