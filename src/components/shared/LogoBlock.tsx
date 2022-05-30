import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  scrolling?: boolean;
}

function LogoBlock({ scrolling }: Props) {
  return (
    <div
      className={clsx(
        'relative flex items-center justify-center cursor-pointer w-24 h-24 transition-all ease-in-out duration-200 z-10',
        scrolling ? 'bg-color-red' : 'bg-transparent'
      )}
    >
      <div className="absolute w-[200px] h-full py-2 -mx-12">
        <Image
          src="/img/logo.png"
          className="object-cover"
          loading="lazy"
          layout="fill"
          alt="Grizzly Hauling"
        />
      </div>
    </div>
  );
}

export default LogoBlock;
