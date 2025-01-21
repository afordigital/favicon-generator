import { useEffect, useRef, useState } from 'react';
import { ActionButtons } from '../middle-canvas/ActionButtons';
import { Button } from '../ui/button';
import { DownloadButtons } from './ActionButtons';
import { MobileMenu } from './MobileMenu';
import { X } from 'lucide-react';

const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, false);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      ref={headerRef}
      className="p-2 bg-[#18181B] border-1 border-b border-zinc-800 text-white w-screen z-20 gap-3 flex lg:grid grid-cols-3 items-center justify-between"
    >
      <div>
        <h1 className="font-bold tracking-wide font-righteous text-xl flex items-center gap-1.5">
          <span>🐀</span>Mykonos
        </h1>
      </div>

      {isOpen && (
        <article className="bg-neutral-900 justify-center absolute z-10 inset-0">
          <div className="flex flex-col gap-8 items-center">
            <div className="flex w-full p-2 justify-between">
              <h1 className="font-bold w-full tracking-wide font-righteous text-xl flex items-center gap-1.5">
                <span>🐀</span>Mykonos
              </h1>
              <Button
                variant="outline"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <X />
              </Button>
            </div>
            <DownloadButtons visibility={true} />
          </div>
        </article>
      )}

      <ActionButtons />
      <DownloadButtons visibility={!isMobile} />
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
