import Link from 'next/link';
import Button from '@/components/ui/Button';
import Image from 'next/image';

function Header() {
  return (
      <header className="fixed px-4 xl:px-0 top-0 z-50 w-full bg-white text-primary pr-0 md:pr-4">
        <div className="flex justify-between h-20 mx-auto bg-white md:h-24 max-w-7xl">
          <div className="flex items-center">
            <Link href="/">
              <a aria-label='link to homepage' className="absolute top-0 z-50 w-24 md:w-[10rem]">
                <img src="/img/logo-badge.png" className='w-full h-full object-cover' loading="lazy" alt="Header Logo" width={112} height={142} />
              </a>
            </Link>
            <div className="hidden md:flex md:h-24">
              <div className='hidden w-full pt-2 ml-24 pl-14 lg:flex lg:w-auto lg:pt-0'>
                <ul className='flex items-center justify-end flex-1 list-reset lg:flex"'>
                  <li className='mr-2'>
                    <Link href="/services">
                      <a aria-label='services' className='inline-block p-2'>
                        <span className='nav-link'>Services</span>
                      </a>
                    </Link>
                  </li>
                  <li className='mr-2'>
                    <Link href="/pricing">
                      <a aria-label='pricing' className='inline-block p-2'>
                        <span className='nav-link'>Pricing</span>
                      </a>
                    </Link>
                  </li>
                  <li className='mr-2'>
                    <Link href="/faq">
                      <a aria-label='faq' className='inline-block p-2'>
                        <span className='nav-link'>FAQs</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a aria-label='contact' className='inline-block p-2'>
                        <span className='nav-link'>Contact</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='hidden lg:flex items-center h-full flex-shrink-0'>
              <div className='flex items-center h-full no-underline mr-8'>
              <Link href="tel:7579937283">
                <a className="transition-colors ease-in-out duration-350 hover:text-primary hover:bg-secondary">
                  <span className="nav-link">
                    (757) 993-7283
                  </span>
                </a>
              </Link>
              </div>
            </div>
            <Button>Book Now</Button>
          </div>
        </div>
      </header>
  );
}

export default Header;
