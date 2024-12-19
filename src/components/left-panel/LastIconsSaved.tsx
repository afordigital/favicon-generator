import { useContext } from 'react';
import Icon from '../icon';
import { CollapsibleComponent } from './Collapsible';
import { IconContext } from '@/App';

export const LastIconsSaved = ({ lastIcons }: { lastIcons: string }) => {
  const { setSvgElement, setIcon } = useContext(IconContext);

  const CANVAS_SIZE = 44;
  const CANVAS_CONTAINER_SIZE = 512;

  return (
    <CollapsibleComponent title="Last Icons">
      <div className="grid mt-4 grid-cols-[repeat(6,1fr)] gap-2">
        {lastIcons.map((lastIcon) => {
          const ICON_X =
            ((lastIcon.iconSize
              ? CANVAS_CONTAINER_SIZE / 2 - lastIcon.iconSize / 2 + (lastIcon.xOffset ?? 0)
              : 0 + (lastIcon.xOffset ?? 0)) *
              CANVAS_SIZE) /
            CANVAS_CONTAINER_SIZE;
          const ICON_Y =
            ((lastIcon.iconSize
              ? CANVAS_CONTAINER_SIZE / 2 - lastIcon.iconSize / 2 + (lastIcon.yOffset ?? 0)
              : 0 + (lastIcon.yOffset ?? 0)) *
              CANVAS_SIZE) /
            CANVAS_CONTAINER_SIZE;

          return (
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
                  style={{ fill: lastIcon.bgColor }}
                  rx={(lastIcon.radius * CANVAS_SIZE) / CANVAS_CONTAINER_SIZE}
                  ry={(lastIcon.radius * CANVAS_SIZE) / CANVAS_CONTAINER_SIZE}
                />

                <Icon
                  x={ICON_X}
                  y={ICON_Y}
                  name={lastIcon.iconName}
                  color={lastIcon.iconColor}
                  strokeWidth={1}
                  width={(lastIcon.iconSize * CANVAS_SIZE) / CANVAS_CONTAINER_SIZE}
                  height={(lastIcon.iconSize * CANVAS_SIZE) / CANVAS_CONTAINER_SIZE}
                />
              </svg>
            </button>
          );
        })}
      </div>
    </CollapsibleComponent>
  );
};
