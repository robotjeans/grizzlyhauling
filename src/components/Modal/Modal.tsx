import React, { FunctionComponent, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { CloseButton, SCModal, Wrapper } from './Modal.style';

export interface ModalProps {
  isOpen: boolean;
  toggleOpen: () => void;
  readonly children: ReactNode;
}

const Modal: FunctionComponent<ModalProps> = ({
  isOpen,
  toggleOpen,
  children,
}) => {
  const modal = (
    <React.Fragment>
      <SCModal open={isOpen}>
        <CloseButton onClick={toggleOpen} />
        <Wrapper open={isOpen}>{children}</Wrapper>
      </SCModal>
    </React.Fragment>
  );

  return isOpen ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
