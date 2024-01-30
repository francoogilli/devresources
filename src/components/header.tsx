"use client"

import React from "react";
import  ThemeSwitcher  from "./theme-switcher";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import useScroll from "src/hooks/use-scroll";
import { Icon } from "@iconify/react/dist/iconify.js";
import { cn } from "src/lib/utils";
const Header = () => {
    
    const scrolled = useScroll(5);
    const selectedLayout= useSelectedLayoutSegment();
    return (
        <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 dark:border-zinc-800 bg-white/75 dark:bg-neutral-900 backdrop-blur-lg`,
        {
          'border-b border-gray-200 dark:border-zinc-800 bg-white/75 dark:bg-neutral-900 backdrop-blur-lg': scrolled,
          'border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-neutral-900': selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex flex-row space-x-3 items-center justify-center md:hidden">
            <span className="h-7 w-7 bg-zinc-300 dark:bg-zinc-700 rounded-lg" >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="rounded-lg" fill="none" viewBox="0 0 300 300"><path fill="#1E1E1E" d="M0 0h300v300H0z"/><path fill="#000" d="M0 0h300v300H0z"/><path fill="#fff" d="M0 75h150v35H0z"/><rect width="149.937" height="35.9929" x="132.015" y="225.009" fill="#fff" rx="17.5" transform="rotate(-90.006 132.015 225.009)"/><path fill="#fff" d="M149 188h151v37H149z"/></svg>
            </span>
            <span className="font-bold text-xl flex text-zinc-800 dark:text-zinc-300 ">Resources Dev</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4 mr-10 sm:mr-0">
          <a href="https://github.com/francoogilli/devresources" target="_blank" rel="noopener noreferrer">
            <Icon icon="lucide:github" className="cursor-pointer text-zinc-800 dark:text-zinc-300 hover:text-neutral-900 dark:hover:text-zinc-100" width="20" height="20" />
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
    )
}
export default Header