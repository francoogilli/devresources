"use client"
import React from "react";
import Image from 'next/image';
import { Icon } from '@iconify/react';

interface CardProps {
  title: string;
  link: string;
  iconDark: string;
  iconLight: string;
  style?: React.CSSProperties; // Prop para estilos adicionales
}

const Card: React.FC<CardProps> = ({ title, link, iconDark, iconLight, style }) => {
  return (
    <article className="relative flex items-center justify-center overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-gray-100 hover:bg-zinc-200/60 dark:bg-neutral-900/60 dark:hover:bg-neutral-900 cursor-auto" style={style}>
      <div className="flex flex-col items-center justify-center rounded-md p-4">
        <Image src={iconDark} draggable={false} alt={title} className="hidden select-none dark:block mb-4 mt-2 w-20 h-20" width={80} height={80} />
        <Image src={iconLight} draggable={false} alt={title} className="block select-none dark:hidden mb-4 mt-2 w-20 h-20" width={80} height={80} />
        <div className="flex flex-col space-y-1 items-center justify-center">
          <p className="truncate text-[19px] font-semibold text-balance text-center select-all">{title}</p>
          <button className="flex items-center space-x-2 rounded-md p-2 duration-100 hover:bg-neutral-200 dark:hover:bg-neutral-700/40" aria-label={'Link to ' + title + ' website'}>
            <a href={link} target="_blank" rel="noopener noreferrer" aria-label={'Link to ' + title + ' website'}>
              <Icon icon="lucide:link" width="20" height="20" />
            </a>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
