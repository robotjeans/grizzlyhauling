import { InputHTMLAttributes } from 'react';

const types = {
  email: 'email',
  tel: 'tel',
  text: 'text',
};

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: keyof typeof types;
  placeholder?: string;
  isLoading?: boolean;
}

function TextInput({
  name,
  label,
  type = 'text',
  placeholder,
  ...props
}: Props) {
  return (
    <div className="min-w-0 flex-1">
      <label htmlFor={`${name}_field`} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={`${name}_field`}
        className="block w-full border border-none bg-white rounded-md px-5 py-3 text-base text-gray placeholder-gray shadow-sm focus:border-blue focus:ring-blue"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

export default TextInput;
