import React from "react";
import Image from 'next/image';

interface CardProps {
  title: string;
  link: string;
  iconDark: string;
  iconLight: string;
}

const Card: React.FC<CardProps> = ({ title, link, iconDark, iconLight }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <article className="relative flex items-center justify-center overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-gray-100 hover:bg-zinc-200/60 dark:bg-neutral-900/60 dark:hover:bg-neutral-900 cursor-pointer">
        <div className="flex flex-col items-center justify-center rounded-md p-4">
        <Image src={iconDark} alt={title} className="hidden dark:block mb-4 mt-2 w-20 h-20" width={80} height={80} />
        <Image src={iconLight} alt={title} className="block dark:hidden mb-4 mt-2 w-20 h-20" width={80} height={80} />
          <div className="flex flex-col space-y-1 items-center justify-center">
            <p className="truncate text-[19px] font-semibold text-balance text-center select-all">{title}</p>
          </div>
        </div>
      </article>
    </a>
  );
};

export default Card;
