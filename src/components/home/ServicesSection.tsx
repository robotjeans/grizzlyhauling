import React from 'react';
import Button from '@/components/ui/Button';

function ServicesSection() {
  return (
    <section className="bg-green px-0 py-16">
      <div className="container">
        <div className="flex flex-wrap my-0 justify-between">
          <div className="relative flex-[0_0_100%] md:flex-[0_0_25%] max-w-full md:max-w-[25%]">
            <h2 className="font-poppins font-bold text-4xl text-black">
              <span>Book</span>
              <br />
              <span>Today</span>
            </h2>
            <Button variant="secondary">Book Today</Button>
          </div>
          <div className="relative flex-[0_0_100%] md:flex-[0_0_75%] max-w-full md:max-w-[75%]"></div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
