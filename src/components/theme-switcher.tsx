// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme==='dark'){
      return <a href="#" onClick={() => setTheme("light")} className="cursor-pointer text-zinc-200 hover:text-zinc-100">a</a>
  }

  if(theme==='light'){
    return <a href="#" onClick={() => setTheme("dark")} className="cursor-pointer text-zinc-800 hover:text-zinc-900">b</a>
  }
  
}