import { IconContext } from "@/App";
import { useContext } from "react";
import Icon from "../icon";

const CANVAS_SIZE = 512;

export const Canvas = () => {
  const { icon, setSvgElement } = useContext(IconContext);

  const ICON_X = icon.iconSize
    ? CANVAS_SIZE / 2 - icon.iconSize / 2 + (icon.xOffset ?? 0)
    : 0 + (icon.xOffset ?? 0);
  const ICON_Y = icon.iconSize
    ? CANVAS_SIZE / 2 - icon.iconSize / 2 + (icon.yOffset ?? 0)
    : 0 + (icon.yOffset ?? 0);

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
        <filter id="multiLayerNoiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={1.73}
            numOctaves="3"
            stitchTiles="stitch"
            result="noise1"
          />
          <feColorMatrix
            in="blendedNoise"
            type="matrix"
            values={`0 0 0 0 0
                 0 0 0 0 0
                 0 0 0 0 0
                 0 0 0 ${icon.noiseOpacity} 0`}
            result="colorNoise"
          />
        </filter>
        <rect
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          style={{ fill: icon.bgColor }}
          rx={icon.radius}
          ry={icon.radius}
          filter="url(#multiLayerNoiseFilter)"
          opacity={icon.noiseTexture ? icon.noiseOpacity : 0}
        />

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
