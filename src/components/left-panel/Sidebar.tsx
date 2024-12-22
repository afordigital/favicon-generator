import { Fragment, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { CollapsibleComponent } from './Collapsible';
import { LastIconsSaved } from './LastIconsSaved';
import { IconContext } from '@/App';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  useSidebar,
} from '@/components/ui/sidebar';
import { generateIconsGrid, icons, isLucideIcon } from '@/lib/icons';
import { getRandomIcon } from '@/lib/utils';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Shuffle } from 'lucide-react';

const COLUMNS = 4;

export function LeftSidebar() {
  const { icon, setIcon } = useContext(IconContext);
  const { open } = useSidebar();

  const parentRef = useRef<HTMLDivElement>(null);
  const [iconSearch, setIconSearch] = useState('');
  const [renderIcons, setRenderIcons] = useState(true);
  const [lastIcons, setLastIcons] = useState<any[]>([]);

  const filteredIcons = Object.entries(icons).filter(([key]) => key.toLowerCase().includes(iconSearch.toLowerCase()));

  const rows = useMemo(
    () => generateIconsGrid({ cols: COLUMNS, arr: filteredIcons.map(([, IconComponent]) => IconComponent) }),
    [filteredIcons],
  );

  useEffect(() => {
    const savedIcons = localStorage.getItem('lastIcons');
    if (savedIcons) {
      setLastIcons(JSON.parse(savedIcons));
    }
  }, []);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 85,
    enabled: open || renderIcons,
    overscan: 5,
  });

  const items = rowVirtualizer.getVirtualItems();

  return (
    <Sidebar className="border-gray-800" variant="floating">
      <SidebarContent>
        <SidebarGroup className="flex flex-row gap-2 sticky top-0 bg-[hsl(var(--sidebar-background))] z-10">
          <Input
            type="search"
            placeholder="Search icons"
            className="rounded-[4px]"
            value={iconSearch}
            onChange={(event) => {
              setIconSearch(event.target.value);
            }}
          />
          <Button
            variant="outline"
            className="rounded-[4px]"
            onClick={() => {
              const randomIcon = getRandomIcon();
              setIcon({ ...icon, iconName: randomIcon });
            }}
          >
            <Shuffle />
          </Button>
        </SidebarGroup>
        <SidebarGroup>
          <LastIconsSaved lastIcons={lastIcons} setLastIcons={setLastIcons} />
        </SidebarGroup>
        <SidebarGroup className="p-0 flex-1">
          <CollapsibleComponent
            title="All icons"
            onClick={() => {
              setRenderIcons((prev) => !prev);
            }}
          >
            <SidebarGroupContent className="pt-3 overflow-y-auto contain-strict h-full no-scrollbar" ref={parentRef}>
              <SidebarMenu
                style={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                }}
                className="w-full relative"
              >
                <div
                  style={{
                    transform: `translateY(${items[0]?.start ?? 0}px)`,
                  }}
                  className="w-full top-0 left-0 absolute flex flex-col gap-2 pb-2"
                >
                  {items.map((row) => (
                    <div
                      key={row.key}
                      ref={rowVirtualizer.measureElement}
                      className="grid grid-cols-[repeat(4,1fr)] gap-2"
                    >
                      {rows[row.index].map((IconComponent, index) => {
                        if (!IconComponent) return null;

                        return (
                          <Fragment key={index}>
                            <Button
                              variant="outline"
                              onClick={() => {
                                const key = filteredIcons.find(([, v]) => v === IconComponent)?.[0] ?? '';

                                if (!isLucideIcon(key)) return;
                                setIcon({ ...icon, iconName: key });
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
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleComponent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
