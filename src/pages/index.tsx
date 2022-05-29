import type { NextPage } from 'next';
import HeroSection from '../components/landing/HeroSection';
import StatsSection from '../components/landing/StatsSection';
import Layout from '../components/Layout';

const Landing: NextPage = () => {
  return (
    <Layout>
      <section className="w-full relative pt-[251px] pb=[163px]">
        <div className="flex flex-col w-[661px] ml-[128px]">
          <h1 className="flex text-[#2e2e4d] text-5xl">
            Grizzly
            <br />
            Hauling
          </h1>
        </div>
      </section>
    </Layout>
  );
};

export default Landing;
