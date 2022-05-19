import type { NextPage } from 'next';
import HeroSection from '../components/landing/HeroSection';
import StatsSection from '../components/landing/StatsSection';
import Layout from '../components/Layout';

const Landing: NextPage = () => {
  return (
    <Layout>
      <div className="h-screen min-h-[1000px]">
        <HeroSection />
        <StatsSection />
      </div>
    </Layout>
  );
};

export default Landing;
