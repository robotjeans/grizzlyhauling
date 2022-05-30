import clsx from 'clsx';

function HeroSection() {
  return (
    <section className="h-screen relative bg-color-white">
      <div className="container h-full mx-auto my-0">
        <div className="relative flex h-full justify-between items-center">
          <div className="flex w-[36.33333%] flex-col flex-start">
            <h1 className={clsx('block')}>
              <span className="block text-secondary font-bangers font-bold text-9xl">
                Grizzly
              </span>
              <span className="block text-black font-poppins font-bold ml-20 -mt-10 text-8xl">
                Hauling<i className="text-secondary font-sans text-7xl">.</i>
              </span>
            </h1>
            <div className="w-full flex justify-end"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

/**
 * <svg
        className={clsx(
          'w-screen h-auto text-offwhite absolute right-0 left-0 bottom-0 z-[10] bg-offwhite opacity-0 origin-center'
        )}
        viewBox="0 0 1920 310"
      >
        <path
          id="svg-wave"
          fill="currentColor"
          fillRule="evenodd"
          transform="translate(0.000000, -554.000000)"
          d="M-3,551 C186.257589,757.321118 319.044414,856.322454 395.360475,848.004007 C509.834566,835.526337 561.525143,796.329212 637.731734,765.961549 C713.938325,735.593886 816.980646,681.910577 1035.72208,733.065469 C1254.46351,784.220361 1511.54925,678.92359 1539.40808,662.398665 C1567.2669,645.87374 1660.9143,591.478574 1773.19378,597.641868 C1848.04677,601.75073 1901.75645,588.357675 1934.32284,557.462704 L1934.32284,863.183395 L-3,863.183395"
        ></path>
      </svg>
 */
