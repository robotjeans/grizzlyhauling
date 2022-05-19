import type { AppProps } from 'next/app';
import '../css/grizzly.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
