import React from 'react';
import type { AppProps } from 'next/app';
import '@/styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
