import { useEffect, useRef } from 'react';
import { ActionButtons } from '../middle-canvas/ActionButtons';
import { DownloadButtons } from './DownloadButtons';

const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className="p-2 bg-[#18181B] border-1 border-b border-zinc-800 text-white w-screen z-20 grid grid-cols-3 items-center justify-between "
    >
      <div>
        <h1 className="font-bold tracking-wide text-xl flex items-center gap-1.5">
          <span>🐀</span>Mykonos
        </h1>
      </div>
      <ActionButtons />
      <DownloadButtons />
    </header>
  );
};

export default Header;
