"use client"

import React from "react";
import  ThemeSwitcher  from "./theme-switcher";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import useScroll from "src/hooks/use-scroll";
import { Icon } from "@iconify/react/dist/iconify.js";
import { cn } from "src/lib/utils";
import Image from "next/image";
const Header = () => {
    
    const scrolled = useScroll(5);
    const selectedLayout= useSelectedLayoutSegment();
    return (
        <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200 dark:border-zinc-800 bg-white/75 dark:bg-neutral-950 backdrop-blur-lg`,
        {
          'border-b border-gray-200 dark:border-zinc-800 bg-white/75 dark:bg-neutral-950 backdrop-blur-lg': scrolled,
          'border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-neutral-950': selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex flex-row space-x-3 items-center justify-center md:hidden">
            <span className=" flex justify-center h-7 w-7 bg-zinc-100 dark:bg-black rounded-lg" >
            <Image src="/icon_dark.svg" className="hidden dark:block" alt="Resources Dev logo" width={25} height={25} />
            <Image src="/icon_light.svg" className="block dark:hidden" alt="Resources Dev logo" width={25} height={25} />
            </span>
            <span className="font-bold text-xl flex text-zinc-800 dark:text-zinc-300 ">Resources Dev</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4 mr-10 sm:mr-0">
          <a href="https://github.com/francoogilli/devresources" target="_blank" rel="noopener noreferrer" aria-label="Link to Franco Gilli development resources on GitHub">
            <Icon icon="simple-icons:github" className="cursor-pointer text-zinc-800 dark:text-zinc-300 hover:text-neutral-900 dark:hover:text-zinc-100" width="20" height="20" />
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
    )
}
export default Header