import Link from 'next/link';
import clsx from 'clsx';

interface Props {
  href: string;
  variant?: string;
  className?: string;
  children: string;
}

function ButtonLink({ href, variant, children, className }: Props) {
  return (
    <Link href={href}>
      <a
        className={clsx(
          'text-color-slate text-base font-poppins font-semibold whitespace-pre hover:underline hover:opacity-75',
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
}

export default ButtonLink;
