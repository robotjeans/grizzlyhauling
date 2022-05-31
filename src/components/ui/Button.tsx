import clsx from 'clsx';
import Spinner from '@/components/ui/Spinner';
import { ButtonHTMLAttributes } from 'react';

const variants = {
  primary: 'bg-red text-white border border-color-red hover:opacity-75',
  inverse: 'bg-white text-slate border border-color-slate hover:opacity-75',
  secondary: 'bg-slate text-white border border-color-slate hover:opacity-75',
};

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

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
        'flex max-h-10 justify-center items-center disabled:bg-transparent disabled:opacity-70 disabled:cursor-not-allowed rounded-md font-normal focus:outline-none',
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
