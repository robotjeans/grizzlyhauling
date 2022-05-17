import { FunctionComponent, ReactNode } from 'react';
import SEO from './SEO';

type Props = {
  readonly children: ReactNode;
  title?: string;
};

const Layout: FunctionComponent<Props> = ({ children, title }) => {
  return (
    <>
      <SEO title={title} />
      <header></header>
      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
