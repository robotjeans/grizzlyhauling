import { FunctionComponent } from 'react';
import Modal from '@/components/Modal';

type Props = {
  open: boolean;
  toggle: () => void;
};

const BookingModal: FunctionComponent<Props> = ({ open, toggle }) => {
  return (
    <Modal isOpen={open} toggleOpen={toggle}>
      <div>Booking Here</div>
    </Modal>
  );
};

export default BookingModal;
