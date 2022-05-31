import Link from 'next/link';
import Image from 'next/image';
import { data } from '@/data';
import Button from '@/components/ui/Button';

function Footer() {
  return (
    <footer className="relative py-12 pb-16 bg-red md:pt-20 md:pb-12 footer">
      <div className="container">
        <div className="flex-wrap justify-between -ml-8 lg:flex">
          <div className="pl-8 mb-12 lhs">
            <Link href="/">
              <a className="hidden mb-4 md:block">Logo Here</a>
            </Link>
            <div className="w-48 text-16px"></div>
            <ul className="inline-flex mt-4">
              {data.social.map(({ url, image, value }) => (
                <li
                  key={value}
                  className="mr-3 transition duration-300 ease-in-out hover:opacity-75"
                >
                  <Link href={url}>
                    <a target="_blank" rel="noreferrer noopener">
                      <Image
                        src={image}
                        className="w-8 h-8"
                        alt={`${value} icon`}
                        width="32px"
                        height="32px"
                      />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-end flex-auto max-w-xl pl-8">
            <div className="flex flex-wrap justify-between flex-auto -ml-6 rhs"></div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-between mt-6 text-center md:mt-16 md:flex-row md:text-left text-sm">
          <div>© 2022. Grizzly Hauling. All Rights Reserved.</div>
          <nav className="flex mt-3 items-center">
            <div className="mx-5 md:mr-0">
              <a href="/terms-conditions/">Terms &amp; Conditions</a>
            </div>
            <div className="mx-5 md:mr-0">
              <a href="/privacy-policy/">Privacy Policy</a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
