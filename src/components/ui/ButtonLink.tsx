import Link from 'next/link';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  href: string;
  variant: string;
  className: string;
  readonly children: ReactNode;
}

function ButtonLink({ href, variant, children, className }: Props) {
  return (
    <Link href={href}>
      <a className={clsx('', className)}>{children}</a>
    </Link>
  );
}

export default ButtonLink;
