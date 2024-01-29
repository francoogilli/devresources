import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col pt-2 px-4 space-y-2 bg-zinc-100 dark:bg-[#111113] text-black dark:text-white flex-grow pb-4">
      {children}
    </div>
  );
}