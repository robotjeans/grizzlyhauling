import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => setIsOpen(true);

  const toggleClose = () => {
    setIsOpen(false);
    console.log('test modal');
  };
  return {
    isOpen,
    toggleOpen,
    toggleClose,
  };
};
