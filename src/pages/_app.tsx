import React from 'react';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </React.Fragment>
  );
};

export default MyApp;
