import clsx from 'clsx';
import Spinner from '@/components/ui/Spinner';
import { ButtonHTMLAttributes } from 'react';

const variants = {
  primary: 'bg-green text-black border-none hover:bg-blue',
  inverse:
    'bg-transparent text-blue border-blue hover:border-red hover:text-red',
  secondary: 'bg-blue text-white border-none hover:bg-green',
};

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
}

function Button({
  type = 'button',
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={clsx(
        'flex max-h-10 justify-center items-center disabled:bg-transparent disabled:opacity-70 disabled:cursor-not-allowed rounded-sm font-bold focus:outline-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading && <Spinner size="sm" className="text-current" />}
      <span>{props.children}</span>
    </button>
  );
}

export default Button;
