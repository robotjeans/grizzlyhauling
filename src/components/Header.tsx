import { useState, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Button from '@/components/ui/Button';
import Image from 'next/image';

/**
 * MOCK Header DATA
 */

const data = {
  header: {
    header_logo: '/img/logo_badge.png',
    menu_links: [
      { key: 'services' },
      { key: 'about' },
      { key: 'faqs' },
      { key: 'contact' },
    ],
  },
};

function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setScrolled(window.pageYOffset > 112)
      );
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'flex flex-nowrap items items-center content-start w-full fixed top-0 left-0 z-[4444] will-change-transform transition-all ease-in-out duration-300',
        scrolled ? 'bg-color-white' : 'bg-transparent'
      )}
    >
      <div className="container h-24">
        <div className="flex flex-nowrap justify-between items-center my-0 mx-auto w-full">
          <Link href="/">
            <a aria-label="link to homepage">
              <div
                className={clsx(
                  'relative bg-center bg-no-repeat cursor-pointer w-16 h-16 transition-all ease-in-out duration-200',
                  scrolled ? 'bg-color-red' : 'bg-transparent'
                )}
                style={{
                  backgroundImage: 'url(/img/logo-badge.png)',
                  backgroundSize: '36%',
                }}
              ></div>
            </a>
          </Link>

          <nav className="flex flex-shrink-0 items-center">
            <ul className="flex items-center justify-start flex-1 list-reset lg:flex">
              {data.header.menu_links.map(({ key }) => (
                <li key={key} className="mr-2">
                  <Link href={`/${key}`}>
                    <a
                      aria-label="services"
                      className="inline-block p-2 capitalize transition-colors ease-in-out duration-350 text-color-black font-semibold"
                    >
                      <span className="nav-link">{key}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="ml-6">Book Now</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

/**
 *  <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="hidden md:flex md:h-24">
            <div className="hidden w-full pt-2 ml-32 pl-14 lg:flex lg:w-auto lg:pt-0">
              <ul className='flex items-center justify-end flex-1 list-reset lg:flex"'>
                <li className="mr-2">
                  <Link href="/services">
                    <a
                      aria-label="services"
                      className="inline-block p-2 transition-colors ease-in-out duration-350 hover:text-primary hover:bg-secondary"
                    >
                      <span className="nav-link">Services</span>
                    </a>
                  </Link>
                </li>
                <li className="mr-2">
                  <Link href="/pricing">
                    <a
                      aria-label="pricing"
                      className="inline-block p-2 transition-colors ease-in-out duration-350 hover:text-primary hover:bg-secondary"
                    >
                      <span className="nav-link">Pricing</span>
                    </a>
                  </Link>
                </li>
                <li className="mr-2">
                  <Link href="/faq">
                    <a
                      aria-label="faq"
                      className="inline-block p-2 transition-colors ease-in-out duration-350 hover:text-primary hover:bg-secondary"
                    >
                      <span className="nav-link">FAQs</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a
                      aria-label="contact"
                      className="inline-block p-2 transition-colors ease-in-out duration-350 hover:text-primary hover:bg-secondary"
                    >
                      <span className="nav-link">Contact</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:flex items-center h-full flex-shrink-0">
            <div className="flex items-center h-full no-underline mr-8">
              <Link href="tel:7579937283">
                <a className="transition-colors ease-in-out duration-350 hover:text-primary hover:bg-secondary">
                  <span className="nav-link">(757) 993-7283</span>
                </a>
              </Link>
            </div>
            <Button>Book Now</Button>
          </div>
        </div>

        <div className="z-50 flex items-center justify-center lg:hidden">
          <button className="z-50 flex items-center cursor-pointer focus:outline-none tg-hamburger">
            <div className="space-y-2">
              <span className="block w-8 h-1 bg-black"></span>
              <span className="block w-8 h-1 bg-black"></span>
              <span className="block w-8 h-1 bg-black"></span>
            </div>
          </button>
        </div>
      </div>
 */
