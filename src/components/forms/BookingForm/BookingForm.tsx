import { FunctionComponent } from 'react';
import { ModalForm } from './BookingForm.style';

const BookingForm: FunctionComponent = () => {
  return (
    <ModalForm>
      <div className="block text-left">
        <div className="flex justify-between mb-6"></div>
        <form></form>
      </div>
    </ModalForm>
  );
};

export default BookingForm;
