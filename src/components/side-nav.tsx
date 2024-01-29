'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '../constants';
import { SideNavItem } from '../types';
import { Icon } from '@iconify/react';

const SideNav = () => {
    return (
        <div className="md:w-60 bg-white dark:bg-zinc-900 h-screen flex-1 fixed border-r border-zinc-200 dark:border-zinc-800 hidden md:flex">
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 dark:border-zinc-800 h-12 w-full"
        >
          <span className="h-7 w-7 bg-zinc-400 dark:bg-zinc-700 rounded-lg" />
          <span className="font-bold dark:text-zinc-300 text-xl hidden md:flex">Dev Resources</span>
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
              className={`flex flex-row items-center p-2 rounded-xl w-full justify-between hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                pathname.includes(item.path) ? 'bg-zinc-100 dark:bg-zinc-800' : ''
              }`}
            >
              <div className="flex flex-row space-x-4 items-center text-black dark:text-white">
                {item.icon}
                <span className="font-semibold text-xl  flex">{item.title}</span>
              </div>
  
              <div className={`${subMenuOpen ? 'rotate-180' : ''} flex text-black dark:text-white`}>
                <Icon icon="lucide:chevron-down" width="24" height="24" />
              </div>
            </button>
  
            {subMenuOpen && (
              <div className="my-2 ml-12 flex flex-col text-black dark:text-white space-y-4">
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
            className={`flex flex-row space-x-4 items-center p-2 rounded-xl text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
              item.path === pathname ? 'bg-zinc-100 dark:bg-zinc-800' : ''
            }`}
          >
            {item.icon}
            <span className="font-semibold text-xl  flex">{item.title}</span>
          </Link>
        )}
      </div>
    );
  };