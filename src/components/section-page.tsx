"use client"
import React from "react";
import { Icon } from '@iconify/react';

interface SectionProps {
  category?: string;
  title: string;
  subtitle?: string;
}

const SectionPage: React.FC<SectionProps> = ({category, title, subtitle }) => {
  return (
    <div className="font-normal flex flex-col w-full max-w-6xl px-4 py-6 rounded-lg bg-white dark:bg-neutral-950 mx-auto">
      <span className="mb-4 inline-flex items-center text-sm text-gray-500 dark:text-gray-400">{category} &nbsp;  <Icon icon="formkit:right"/><span className="text-black dark:text-white">&nbsp; {title}</span></span>
      <span className="mb-2 tracking-tight inline font-bold from-[#FF705B] to-[#FFB457] text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
        {title}
      </span>
      <span className="text-lg md:text-lg text-gray-400">{subtitle}</span>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
    </div>
  );
};

export default SectionPage;
