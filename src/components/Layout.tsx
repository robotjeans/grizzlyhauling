import { FunctionComponent, ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import SEO from './SEO';

type Props = {
  readonly children: ReactNode;
  title?: string;
};

const Layout: FunctionComponent<Props> = ({ children, title }) => {
  return (
    <>
      <SEO title={title} />
      <Header />
      <main role="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
