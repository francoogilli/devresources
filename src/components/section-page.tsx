"use client"
import React from "react";
import { Icon } from '@iconify/react';

interface SectionProps {
  title: string;
  category?: string;
}

const SectionPage: React.FC<SectionProps> = ({ title, category }) => {
  return (
    <div className="font-normal flex flex-col w-full max-w-6xl px-4 py-6 rounded-lg bg-white dark:bg-neutral-950 mx-auto">
      <span className="mb-4 inline-flex items-center text-sm text-gray-500 dark:text-gray-400">{category} &nbsp;  <Icon icon="formkit:right"/><span className="text-black dark:text-white">&nbsp; {title}</span></span>
      <span className="mb-5 tracking-tight inline font-bold from-[#FF705B] to-[#FFB457] text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
        {title}
      </span>
      <div className="border-dashed border border-zinc-500 w-full h-12 rounded-lg my-5"></div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
    </div>
  );
};

export default SectionPage;
