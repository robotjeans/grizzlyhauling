import { FunctionComponent, useEffect, useState } from 'react';
import clsx from 'clsx';
import classes from './HeroSection.module.css';

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
    <section id="landing" className={clsx(classes.hero_section)}>
      <div className="w-full h-full bg-red-600">
        <div className="container">
          <div className="flex items-center flex-wrap"></div>
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