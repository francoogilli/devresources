'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDENAV_ITEMS } from '../constants';
import { SideNavItem } from '../types';
import { Icon } from '@iconify/react';

const SideNav = () => {
    return (
        <div className="md:w-60 bg-white dark:bg-neutral-950 h-screen flex-1 fixed border-r border-zinc-200 dark:border-zinc-800 hidden md:flex">
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 dark:border-zinc-800 h-12 w-full"
        >
          <span className="h-7 w-7 bg-zinc-400 dark:bg-zinc-700 rounded-lg" >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="rounded-lg" fill="none" viewBox="0 0 300 300"><path fill="#1E1E1E" d="M0 0h300v300H0z"/><path fill="#000" d="M0 0h300v300H0z"/><path fill="#fff" d="M0 75h150v35H0z"/><rect width="149.937" height="35.9929" x="132.015" y="225.009" fill="#fff" rx="17.5" transform="rotate(-90.006 132.015 225.009)"/><path fill="#fff" d="M149 188h151v37H149z"/></svg>
          </span>
          <span className="font-bold text-zinc-800 dark:text-zinc-300 text-xl hidden md:flex">Resources Dev</span>
        </Link>

        <div className="flex flex-col space-y-2  md:px-6 ">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
    );
}
export default SideNav

const MenuItem = ({ item }: { item: SideNavItem }) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
      setSubMenuOpen(!subMenuOpen);
    };
  
    return (
      <div className="">
        {item.submenu ? (
          <>
            <button
              onClick={toggleSubMenu}
              className={`flex flex-row items-center p-2 rounded-xl w-full justify-between hover:bg-zinc-100 dark:hover:bg-[#141414] ${
                pathname.includes(item.path) ? 'bg-zinc-100 dark:bg-[#141414]' : ''
              }`}
            >
              <div className="flex flex-row space-x-4 items-center text-zinc-800 dark:text-zinc-200">
                {item.icon}
                <span className="font-medium text-xl  flex">{item.title}</span>
              </div>
  
              <div className={`${subMenuOpen ? 'rotate-180' : ''} flex text-zinc-800 dark:text-zinc-200`}>
                <Icon icon="lucide:chevron-down" width="24" height="24" />
              </div>
            </button>
  
            {subMenuOpen && (
              <div className="my-2 ml-12 flex flex-col text-zinc-800 dark:text-zinc-200 space-y-4">
                {item.subMenuItems?.map((subItem, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={subItem.path}
                      className={`${
                        subItem.path === pathname ? 'font-bold' : ''
                      }`}
                    >
                      <span>{subItem.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          <Link
            href={item.path}
            className={`flex flex-row space-x-4 items-center p-2 rounded-xl text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-[#141414] ${
              item.path === pathname ? 'bg-zinc-100 dark:bg-[#141414]' : ''
            }`}
          >
            {item.icon}
            <span className="font-medium text-xl  flex">{item.title}</span>
          </Link>
        )}
      </div>
    );
  };