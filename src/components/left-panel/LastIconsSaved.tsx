import { Dispatch, SetStateAction, useState } from 'react';
import Icon from '../icon';
import { Button } from '../ui/button';
import { Collapsible } from './Collapsible';
import { IconProps } from '@/App';
import { useIconContext } from '@/context/useIconContext';
import { Trash } from 'lucide-react';

export const LastIconsSaved = ({
  lastIcons,
  setLastIcons,
}: {
  lastIcons: IconProps[];
  setLastIcons: Dispatch<SetStateAction<IconProps[]>>;
}) => {
  const { setIcon, icon } = useIconContext();
  const [hoveredIconId, setHoveredIconId] = useState<string | null>(null);

  const CANVAS_SIZE = 44;
  const CANVAS_CONTAINER_SIZE = 512;

  const deleteIcon = (id: string) => {
    const storedIcons = localStorage.getItem('lastIcons') ?? '[]';
    localStorage.setItem(
      'lastIcons',
      JSON.stringify(JSON.parse(storedIcons).filter((icon: IconProps) => icon.id !== id)),
    );
    setLastIcons((prev) => prev.filter((icon) => icon.id !== id));
    if (icon.id === id) {
      setIcon({ ...icon, iconName: 'Bike', id: crypto.randomUUID() });
    }
  };

  return (
    <Collapsible trigger="My Icons">
      <div className="grid mt-4 grid-cols-[repeat(6,1fr)] gap-2">
        {lastIcons.map((lastIcon) => {
          const iconSize = lastIcon.iconSize ?? CANVAS_CONTAINER_SIZE;
          const xOffset = lastIcon.xOffset ?? 0;
          const yOffset = lastIcon.yOffset ?? 0;

          const ICON_X =
            ((iconSize ? CANVAS_CONTAINER_SIZE / 2 - iconSize / 2 + xOffset : 0 + xOffset) * CANVAS_SIZE) /
            CANVAS_CONTAINER_SIZE;

          const ICON_Y =
            ((iconSize ? CANVAS_CONTAINER_SIZE / 2 - iconSize / 2 + yOffset : 0 + yOffset) * CANVAS_SIZE) /
            CANVAS_CONTAINER_SIZE;

          return (
            <div
              onMouseEnter={() => setHoveredIconId(lastIcon.id)}
              onMouseLeave={() => setHoveredIconId(null)}
              className="h-fit w-fit relative"
            >
              <button
                onClick={() => {
                  setIcon(lastIcon);
                }}
              >
                <svg
                  width={CANVAS_SIZE}
                  height={CANVAS_SIZE}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    width={CANVAS_SIZE}
                    height={CANVAS_SIZE}
                    style={{ fill: lastIcon.primaryBgColor }}
                    rx={((lastIcon.radius ?? 0) * CANVAS_SIZE) / CANVAS_CONTAINER_SIZE}
                    ry={((lastIcon.radius ?? 0) * CANVAS_SIZE) / CANVAS_CONTAINER_SIZE}
                  />
                  <div
                    onMouseEnter={() => setHoveredIconId(lastIcon.id)}
                    onMouseLeave={() => setHoveredIconId(null)}
                    className="h-fit w-fit relative"
                  >
                    <svg
                      width={CANVAS_SIZE}
                      height={CANVAS_SIZE}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        width={CANVAS_SIZE}
                        height={CANVAS_SIZE}
                        style={{ fill: lastIcon.primaryBgColor }}
                        rx={((lastIcon.radius ?? 0) * CANVAS_SIZE) / CANVAS_CONTAINER_SIZE}
                        ry={((lastIcon.radius ?? 0) * CANVAS_SIZE) / CANVAS_CONTAINER_SIZE}
                      />

                      <Icon
                        x={ICON_X}
                        y={ICON_Y}
                        name={lastIcon.iconName}
                        color={lastIcon.color}
                        strokeWidth={1}
                        width={(iconSize * CANVAS_SIZE) / CANVAS_CONTAINER_SIZE}
                        height={(iconSize * CANVAS_SIZE) / CANVAS_CONTAINER_SIZE}
                      />
                    </svg>

                    {hoveredIconId === lastIcon.id && (
                      <Button
                        onClick={() => {
                          deleteIcon(lastIcon.id);
                        }}
                        variant={'outline'}
                        className="absolute -top-[10px] -right-[20px] bg-white"
                      >
                        <Trash />
                      </Button>
                    )}
                  </div>
                  <Icon
                    x={ICON_X}
                    y={ICON_Y}
                    name={lastIcon.iconName}
                    color={lastIcon.color}
                    strokeWidth={1}
                    width={(iconSize * CANVAS_SIZE) / CANVAS_CONTAINER_SIZE}
                    height={(iconSize * CANVAS_SIZE) / CANVAS_CONTAINER_SIZE}
                  />
                </svg>
              </button>

              {hoveredIconId === lastIcon.id && (
                <Button
                  onClick={() => {
                    deleteIcon(lastIcon.id);
                  }}
                  variant="outline"
                  className="absolute z-10 -top-[20px] -right-[20px] px-2"
                >
                  <Trash size={10} />
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </Collapsible>
  );
};
