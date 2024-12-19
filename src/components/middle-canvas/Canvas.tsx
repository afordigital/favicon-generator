import { useContext } from 'react';
import Icon from '../icon';
import { IconContext } from '@/App';

const CANVAS_SIZE = 512;

export const Canvas = () => {
  const { icon, setSvgElement } = useContext(IconContext);

  const ICON_X = icon.iconSize ? CANVAS_SIZE / 2 - icon.iconSize / 2 + (icon.xOffset ?? 0) : 0 + (icon.xOffset ?? 0);
  const ICON_Y = icon.iconSize ? CANVAS_SIZE / 2 - icon.iconSize / 2 + (icon.yOffset ?? 0) : 0 + (icon.yOffset ?? 0);

  return (
    <>
      <svg
        ref={setSvgElement}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="2" result="noise" />
            <feColorMatrix
              in="noise"
              type="matrix"
              values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 1 0"
              result="grayscaleNoise"
            />
            <feComponentTransfer in="grayscaleNoise" result="thresholdedNoise">
              <feFuncR type="discrete" tableValues="0 1" />
              <feFuncG type="discrete" tableValues="0 1" />
              <feFuncB type="discrete" tableValues="0 1" />
              <feFuncA type="discrete" tableValues="0 1" />
            </feComponentTransfer>
            <feFlood flood-color="white" result="white" />
            <feComposite in="white" in2="thresholdedNoise" operator="in" result="whiteNoise" />
            <feBlend in2="SourceGraphic" mode="over" in="whiteNoise" />
          </filter>

          <mask id="roundMask">
            <rect width={CANVAS_SIZE} height={CANVAS_SIZE} fill="white" rx={icon.radius} ry={icon.radius} />
          </mask>
        </defs>

        <g mask="url(#roundMask)">
          <rect
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            fill={icon.bgColor}
            rx={icon.radius}
            ry={icon.radius}
            filter="url(#noiseFilter)"
          />
        </g>

        <Icon
          x={ICON_X}
          y={ICON_Y}
          name={icon.iconName}
          color={icon.iconColor}
          strokeWidth={1}
          width={icon.iconSize}
          height={icon.iconSize}
        />
      </svg>
    </>
  );
};
