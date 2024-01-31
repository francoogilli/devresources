"use client"
import React from "react";
import { Icon } from '@iconify/react';

interface SectionProps {
  category?: string;
  title: string;
  subtitle?: string;
  color1?: string;
  color2?: string;
}

const SectionPage: React.FC<SectionProps> = ({ category, title, subtitle, color1, color2 }) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to bottom, ${color1}, ${color2})`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent'
  };

  return (
    <div className="font-normal flex flex-col w-full max-w-6xl px-4 py-6 rounded-lg bg-white dark:bg-neutral-950 mx-auto">
      <span className="mb-4 inline-flex items-center text-sm text-gray-500 dark:text-gray-400">{category} &nbsp;  <Icon icon="formkit:right"/><span className="text-black dark:text-white">&nbsp; {title}</span></span>
      <h1 className="mb-2 tracking-tight inline font-bold text-4xl lg:text-5xl" style={gradientStyle}>
        {title}
      </h1>
      <span className="text-lg md:text-lg text-gray-400">{subtitle}</span>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
    </div>
  );
};

export default SectionPage;

