"use client"

import React from "react";
import { ThemeSwitcher } from "./theme-switcher";
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
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 dark:border-zinc-800 bg-white/75 dark:bg-zinc-900 backdrop-blur-lg`,
        {
          'border-b border-gray-200 dark:border-zinc-800 bg-white/75 dark:bg-zinc-900 backdrop-blur-lg': scrolled,
          'border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900': selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex flex-row space-x-3 items-center justify-center md:hidden">
            <span className="h-7 w-7 bg-zinc-300 dark:bg-zinc-700 rounded-lg" />
            <span className="font-bold text-xl flex text-black dark:text-zinc-300 ">Dev Resources</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4 mr-10 sm:mr-0">
          <Icon icon="lucide:github" className="cursor-pointer text-zinc-800 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100" width="20" height="20" />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
    )
}
export default Header