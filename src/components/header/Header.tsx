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
      className="px-3 py-2 bg-[#18181B] border-1 border-b border-zinc-800 text-white w-screen z-20 flex justify-between p-6"
    >
      <p>Mykonos</p>
      <ActionButtons />
      <DownloadButtons />
    </header>
  );
};

export default Header;
