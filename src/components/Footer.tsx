import Link from 'next/link';
import Image from 'next/image';
import { data } from '@/data';
import SubscribeForm from './forms/SubscribeForm';

function Footer() {
  return (
    <footer className="bg-black pt-8 footer">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="flex-1">
            <h2 className="uppercase text-white font-extrabold text-xl m-0 font-poppins">
              Keep up with us!
            </h2>
          </div>
          <div className="flex-1">
            <SubscribeForm />
          </div>
          <div className="flex-1 flex justify-end">
            <ul className="inline-flex items-center">
              {data.social.map(({ url, image, value }) => (
                <li key={value} className="my-0 mr-4 last-of-type:mr-0">
                  <Link href={url}>
                    <a
                      className="flex w-11 h-11 bg-white items-center justify-center"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Image
                        src={image}
                        alt={`${value} icon`}
                        width="22px"
                        height="22px"
                      />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray mt-8 p-4">
        <p className="text-xs text-offwhite text-center leading-7">
          <Link href="/terms-conditions/">
            <a className="underline">Terms &amp; Conditions</a>
          </Link>{' '}
          <Link href="/privacy-policy/">
            <a className="underline">Privacy Policy</a>
          </Link>
          <br />© 2022. Grizzly Hauling. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
