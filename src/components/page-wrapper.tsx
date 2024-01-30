import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col px-4 space-y-2 bg-white dark:bg-neutral-950 text-zinc-800 dark:text-white flex-grow pb-4">
      {children}
    </div>
  );
}