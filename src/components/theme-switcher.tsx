// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme==='dark'){
      return <Icon icon="lucide:moon" className="cursor-pointer text-zinc-400 hover:text-zinc-100" width="20" height="20" onClick={() => setTheme("light")}/>
  }

  if(theme==='light'){
    return <Icon  icon="lucide:sun" className="cursor-pointer text-zinc-800 hover:text-zinc-900" width="20" height="20" onClick={() => setTheme("dark")}/>
  }
  
}