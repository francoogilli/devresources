'use client'
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return null;

  if (resolvedTheme === 'dark') {
    return <Icon icon="lucide:moon" className="cursor-pointer text-zinc-400 hover:text-zinc-100" width="20" height="20" onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <Icon icon="lucide:sun" className="cursor-pointer text-zinc-800 hover:text-zinc-900" width="20" height="20" onClick={() => setTheme('dark')} />
  }

}