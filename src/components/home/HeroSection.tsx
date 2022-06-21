import clsx from 'clsx';
import { useState } from 'react';
import Image from 'next/image';

function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

  return (
    <section className="relative bg-black">
      <video
        className={clsx(
          'block w-full max-h-[90vh] object-cover -translate-x-full transition-transform duration-200 ease-in-out',
          isVideoLoaded && 'translate-x-0'
        )}
        autoPlay
        muted
        playsInline
        loop
        onCanPlay={() => {
          setTimeout(() => {
            setIsVideoLoaded(true);
          }, 200);
        }}
      >
        <source
          src="https://d1yx63o1880ifw.cloudfront.net/GHOST-Energy-Web-Final.mp4"
          type="video/mp4"
        ></source>
      </video>
      <div className="absolute z-10 top-[100px] md:top-[50px] left-[100px] md:left-[50px]">
        <h1 className="uppercase text-green color-green text-8xl pb-8 border-b-4 border-green border-solid font-poppins">
          <div className="relative w-full h-auto max-w-[200px] overflow-hidden">
            <Image
              src="/img/grizzly_logo.png"
              alt="grizzly logo"
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
          </div>
        </h1>
      </div>
      <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-opacity-40"></div>
    </section>
  );
}

export default HeroSection;

/**
 * <div className="relative flex h-full justify-between items-center">
          <div className="flex w-[36.33333%] flex-col flex-start">
            <h1 className={clsx('block text-center')}>
              <span className="block text-secondary font-bangers font-bold text-9xl">
                Grizzly
              </span>
              <span className="block w-[76%] m-auto h-2 bg-color-slate"></span>
              <span className="block text-color-slate uppercase tracking-widest mt-3 font-poppins font-bold text-6xl">
                Hauling
              </span>
            </h1>
            <div className="w-full flex justify-end mt-6"></div>
          </div>
        </div>
 */
