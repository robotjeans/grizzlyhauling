import { FunctionComponent, useEffect, useState } from 'react';
import clsx from 'clsx';
import classes from './HeroSection.module.css';
import SubscribeForm from '../../forms/SubscribeForm';

type HeroData = {
  heading: string;
  content: string;
  headingSlug: string;
  heroThumb: string;
};

/* Mock CMS Data */

const initData = {
  heading: 'Make cool Landing pages with sApp',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem est deserunt molestias accusamus harum ullam tempore debitis et, expedita, repellat delectus aspernatur neque itaque qui quod.',
  headingSlug: '* Available on iPhone, iPad and all Android devices',
  heroThumb: '/img/welcome_mockup.png',
};

const HeroSection: FunctionComponent = () => {
  const [data, setData] = useState<HeroData | null>(null);

  useEffect(() => {
    setData(initData);
  }, []);

  return (
    <section
      id="landing"
      className=" relative z-[1] flex items-center h-[800px] overflow-hidden bg-red-600"
    >
      <div className="container my-0 mx-auto mt-[-100px]">
        <div className="flex flex-wrap mx-[-15px] items-center">
          <div className="w-full px-4 flex-[0 0 100%] max-w-full md:flex-[0 0 58.333333%] md:max-w-[58.333333%]">
            <div>
              <h1 className="mt-0 block m-0">
                <span className="text-white block text-9xl font-bangers font-bold">
                  Grizzly
                </span>
              </h1>
              {/*
                <span className="block text-white text-5xl tracking-wide font-poppins font-bold">
                  Hauling & Removal
                </span>
              </h1>
              <p className="mb-6 mt-6 text-black text-xl">
                Virginia Beach hauling & junk removal services.
                <br />
                We do the heavy lifting, so you can focus on your latest
                project.
  </p>*/}
            </div>
          </div>
          <div className="w-full px-4 flex-[0 0 100%] max-w-full md:flex-[0 0 58.333333%] md:max-w-[58.333333%]">
            <div></div>
          </div>
        </div>
      </div>
      <svg className={clsx(classes.hero_wave)} viewBox="0 0 1920 310">
        <path
          id="svg-wave"
          fill="currentColor"
          fillRule="evenodd"
          transform="translate(0.000000, -554.000000)"
          d="M-3,551 C186.257589,757.321118 319.044414,856.322454 395.360475,848.004007 C509.834566,835.526337 561.525143,796.329212 637.731734,765.961549 C713.938325,735.593886 816.980646,681.910577 1035.72208,733.065469 C1254.46351,784.220361 1511.54925,678.92359 1539.40808,662.398665 C1567.2669,645.87374 1660.9143,591.478574 1773.19378,597.641868 C1848.04677,601.75073 1901.75645,588.357675 1934.32284,557.462704 L1934.32284,863.183395 L-3,863.183395"
        ></path>
      </svg>
    </section>
  );
};

export default HeroSection;

/**
 * 
 *  <div className={clsx(classes.hero_grid)}>
          <div className="block row-start-span-one row-end-span-one col-start-span-one col-end-span-one pl-0 pt-[100px]">
            <h1 className="w-[482px] mt-0 mb-6">
              <span className="text-white block text-9xl font-bangers font-bold">
                Grizzly
              </span>
              <span className="text-white block text-7xl font-poppins font-extrabold">
                HAULING
              </span>
            </h1>
            <p className="w-[480px] mb-0 text-black text-2xl">
              Virginia Beach hauling & junk removal services. We do the heavy
              lifting, so you can focus on your latest project.
            </p>
          </div>
        </div>
 */
