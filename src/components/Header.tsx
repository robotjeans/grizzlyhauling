import { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import clsx from 'clsx';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import ButtonLink from './ui/ButtonLink';

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
  const { scrollYProgress } = useViewportScroll();

  const headerY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3],
    ['-100%', '0%', '0%']
  );

  return (
    <motion.header
      style={{
        y: headerY,
      }}
      className={clsx(
        'z-50 text-base flex items-center fixed top-0 left-0 w-full h-[70px] md:h-[122px] bg-black'
      )}
    >
      <div className="container flex items-center justify-between text-base align-center">
        <div className="flex-auto">
          <Link href="/">
            <a>
              <Image
                src="/img/grizzly_logo.png"
                alt="Grizzly Hauling"
                width={160}
                height={100}
              />
            </a>
          </Link>
        </div>
        <nav className="justify-center flex-auto hidden -ml-6 font-semibold md:flex align-center">
          {data.header.menu_links.map(({ key }) => (
            <li key={key} className="pl-6 first-of-type:pl-0">
              <Link href={`/${key}`}>
                <a
                  aria-label="services"
                  className=" capitalize hover:opacity-75"
                >
                  <span className="nav-link">{key}</span>
                </a>
              </Link>
            </li>
          ))}
        </nav>
        <div className="items-center justify-end hidden space-x-4 lg:flex">
          <ButtonLink variant="primary" href="tel:7579937283">
            (757) 993-7283
          </ButtonLink>
          <div className="flex items-baseline space-x-4"></div>
          <Button variant="primary" onClick={() => {}}>
            Contact Us
          </Button>
        </div>
      </div>
    </motion.header>
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
