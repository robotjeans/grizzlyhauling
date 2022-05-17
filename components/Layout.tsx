import { FunctionComponent, ReactNode } from 'react';
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
      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
