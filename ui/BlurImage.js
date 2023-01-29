import React from 'react';
import { clsx } from 'clsx';

export default function BlurImage({ children, type }) {
    const [isLoading, setLoading] = React.useState(true)
    return (
    <div
      className={clsx("relative flex overflow-hidden rounded-xl bg-white/[2%] after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-xl after:border after:border-rose-200/10 after:content-['']",
      isLoading ? "animate-pulse":""
      )}
    >
      
    </div>
  );
}