import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Collapsible } from './Collapsible';
import { LastIconsSaved } from './LastIconsSaved';
import { Sidebar, SidebarContent, SidebarHeader, useSidebar } from '@/components/ui/sidebar';
import { useIconContext } from '@/context/useIconContext';
import { generateIconsGrid, icons, isLucideIcon } from '@/lib/icons';
import { getRandomIcon } from '@/lib/utils';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Shuffle } from 'lucide-react';

const ITEMS_PER_ROW = 4;

export function LeftSidebar() {
  const { icon, setIcon, lastIcons, setLastIcons } = useIconContext();
  const { open } = useSidebar();

  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(true);

  const parentRef = useRef<HTMLDivElement>(null);
  const [iconSearch, setIconSearch] = useState('');

  const filteredIcons = Object.entries(icons).filter(([key]) => key.toLowerCase().includes(iconSearch.toLowerCase()));

  const rows = useMemo(
    () =>
      generateIconsGrid({
        columns: ITEMS_PER_ROW,
        items: filteredIcons,
      }),
    [filteredIcons],
  );

  useEffect(() => {
    const savedIcons = localStorage.getItem('lastIcons');
    if (savedIcons) {
      setLastIcons(JSON.parse(savedIcons));
    }
  }, [setLastIcons]);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 85,
    enabled: open && isCollapsibleOpen,
    overscan: 5,
  });

  const items = rowVirtualizer.getVirtualItems();
  const [firstItem] = items;
  const { start: firstItemStart = 0 } = firstItem ?? {};

  return (
    <Sidebar
      side="left"
      className="border-gray-800 h-full"
      style={{ paddingTop: 'calc(var(--header-height) + 0.5rem)' }}
      variant="floating"
    >
      <SidebarHeader className="flex flex-row gap-2">
        <Input
          type="search"
          placeholder="Search icons"
          value={iconSearch}
          onChange={(event) => {
            setIconSearch(event.target.value);
          }}
        />

        <Button
          variant="outline"
          onClick={() => {
            const randomIcon = getRandomIcon();
            setIcon({ ...randomIcon });
          }}
        >
          <Shuffle />
        </Button>
      </SidebarHeader>

      <SidebarContent className="h-full overflow-hidden">
        <LastIconsSaved lastIcons={lastIcons} setLastIcons={setLastIcons} />

        <div className="flex-1">
          <Collapsible
            trigger="All Icons"
            onCollapsibleChange={(isOpen) => {
              setIsCollapsibleOpen(isOpen);
            }}
            defaultOpen
            className="h-full"
          >
            <div ref={parentRef} className="h-full py-4 overflow-y-auto contain-strict">
              <div
                style={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                }}
                className="w-full relative flex flex-col gap-2"
              >
                <div
                  style={{
                    transform: `translateY(${firstItemStart}px)`,
                  }}
                  className="w-full absolute top-0 left-0 flex flex-col gap-2"
                >
                  {items.map((row) => (
                    <div
                      key={row.key}
                      ref={rowVirtualizer.measureElement}
                      className="grid grid-cols-[repeat(4,1fr)] gap-2"
                    >
                      {rows[row.index].map(([iconName, IconComponent]) => {
                        if (!IconComponent) return null;

                        return (
                          <Fragment key={iconName}>
                            <Button
                              variant="outline"
                              onClick={() => {
                                if (!isLucideIcon(iconName)) return;
                                setIcon({ ...icon, iconName });
                              }}
                              className="rounded-md [&_svg]:size-6 aspect-square w-full h-auto"
                            >
                              <IconComponent />
                            </Button>
                          </Fragment>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Collapsible>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
