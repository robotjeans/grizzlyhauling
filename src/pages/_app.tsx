import React from 'react';
import type { AppProps } from 'next/app';
import '@/styles/grizzly.css';
import GlobalStyles from '@/styles/global';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
