import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Landing: NextPage = () => {
  return (
    <Layout>
      <div className="w-screen h-screen bg-slate-700">
        <h3>Landing Page</h3>
      </div>
    </Layout>
  );
};

export default Landing;
