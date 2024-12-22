import { useContext, useState } from 'react';
import Icon from '../icon';
import { Button } from '../ui/button';
import { CollapsibleComponent } from './Collapsible';
import { IconContext, IconProps } from '@/App';
import { Trash } from 'lucide-react';

export const LastIconsSaved = ({
  lastIcons,
  setLastIcons,
}: {
  lastIcons: IconProps[];
  setLastIcons: (lastIcon: IconProps) => void;
}) => {
  const { setSvgElement, setIcon, icon } = useContext(IconContext);
  const [hovered, setHovered] = useState(false);

  const CANVAS_SIZE = 44;
  const CANVAS_CONTAINER_SIZE = 512;

  const deleteIcon = (name: string) => {
    const storedIcons = localStorage.getItem('lastIcons') ?? '[]';
    localStorage.setItem(
      'lastIcons',
      JSON.stringify(JSON.parse(storedIcons).filter((icon: IconProps) => icon.iconName !== lastIcons.iconName)),
    );
    setLastIcons((prev) => prev.filter((icon) => icon.iconName !== name));
    if (icon.iconName === name) {
      setIcon({ ...icon, iconName: 'Bike' });
    }
  };

  return (
    <CollapsibleComponent title="My Icons">
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
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="h-fit w-fit relative"
            >
              <button
                onClick={() => {
                  setIcon(lastIcon);
                }}
              >
                <svg
                  ref={setSvgElement}
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
                    rx={(lastIcon.radius * CANVAS_SIZE) / CANVAS_CONTAINER_SIZE}
                    ry={(lastIcon.radius * CANVAS_SIZE) / CANVAS_CONTAINER_SIZE}
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
              </button>
              {hovered && (
                <Button
                  onClick={() => {
                    deleteIcon(lastIcon.iconName);
                  }}
                  variant={'outline'}
                  className="absolute -top-[10px] -right-[20px] bg-white"
                >
                  <Trash />
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </CollapsibleComponent>
  );
};
