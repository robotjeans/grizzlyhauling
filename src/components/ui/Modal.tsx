import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useModal } from '@/hooks/useModal';

interface Props {
  isOpen: boolean;
  toggleClose: () => void;
  readonly children: ReactNode;
}

/**
 * animation values
 */

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

function Modal({ isOpen, toggleClose, children }: Props) {
  const modalComponent = (
    <motion.div
      className={clsx(
        'flex justify-center items-center fixed top-0 right-0 bottom-0 left-0 overflow-hidden min-h-full h-auto bg-color-black bg-opacity-75',
        isOpen && 'z-[4444]'
      )}
      onClick={toggleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        onClick={toggleClose}
        className="absolute top-0 right-0 w-16 h-16 cursor-pointer z-[1] transition-all ease-in-out duration-300 bg-color-white"
      ></div>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="inline-block max-w-full w-[650px] p-12 m-[auto 0] bg-color-white"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </motion.div>
  );

  return isOpen
    ? ReactDOM.createPortal(
        modalComponent,
        document.getElementById('__next') as HTMLElement
      )
    : null;
}

export default Modal;
