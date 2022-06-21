import { FunctionComponent, ReactNode } from 'react';
import { motion } from 'framer-motion';
import SEO from './SEO';

type Props = {
  readonly children: ReactNode;
  title?: string;
  description?: string;
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout: FunctionComponent<Props> = ({ children, title, description }) => {
  return (
    <>
      <SEO title={title} description={description} />
      <motion.main
        role="main"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
