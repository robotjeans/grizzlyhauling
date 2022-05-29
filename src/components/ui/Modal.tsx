import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import clsx from 'clsx';

function Modal({ isOpen }: { isOpen: boolean }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <div
        className={clsx(
          'flex justify-center items-center fixed top-0 right-0 bottom-0 left-0 overflow-hidden min-h-full h-auto bg-opacity-75',
          isOpen && 'z-[4444]'
        )}
      ></div>
    </Transition>
  );
}

export default Modal;
