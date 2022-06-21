import Link from 'next/link';
import clsx from 'clsx';

const variants = {
  primary: 'text-green',
  secondary: 'text-blue',
};

interface Props {
  href: string;
  variant?: keyof typeof variants;
  className?: string;
  children: string;
}

function ButtonLink({ href, variant = 'primary', children, className }: Props) {
  return (
    <Link href={href}>
      <a
        className={clsx(
          'text-color-slate text-base font-poppins font-semibold whitespace-pre hover:underline hover:opacity-75',
          variants[variant],
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
}

export default ButtonLink;
