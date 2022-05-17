import Head from 'next/head';
import { FunctionComponent } from 'react';

type Props = {
  title?: string;
  description?: string;
  image?: string;
};

const SEO: FunctionComponent<Props> = ({
  title = 'Grizzly Hauling',
  description = 'Virginia Beach hauling & junk removal services. We do the heavy lifting, so you can focus on your latest project.',
  image,
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />

      <meta name="theme-color" content="#00c2cc" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{title} | Hampton Roads</title>
      <meta name="description" content={description} />
      <meta key="og:title" name="og:title" content="Grizzly Hauling" />
      <meta key="og:description" name="og:description" content={title} />
      <meta name="name" content={title} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
    </Head>
  );
};

export default SEO;
