import StatsSection from '@/components/home/StatsSection';
import type { NextPage } from 'next';
import HeroSection from '../components/home/HeroSection';
import Layout from '../components/Layout';

const Landing: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
    </Layout>
  );
};

export default Landing;
