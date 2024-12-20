import { useContext, useEffect, useState } from 'react';
import Icon from '../icon';
import { IconContext } from '@/App';

const CANVAS_SIZE = 512;

export const Canvas = () => {
  const { icon, setSvgElement } = useContext(IconContext);
  const [noiseImg, setNoiseImg] = useState<string | null>(null)

  const ICON_X = icon.iconSize ? CANVAS_SIZE / 2 - icon.iconSize / 2 + (icon.xOffset ?? 0) : 0 + (icon.xOffset ?? 0);
  const ICON_Y = icon.iconSize ? CANVAS_SIZE / 2 - icon.iconSize / 2 + (icon.yOffset ?? 0) : 0 + (icon.yOffset ?? 0);

  // note: we must inline the image otherwise the download will ignore it
  useEffect(() => {
    (async function() {
      const res = await fetch('/noise.png');
      const blob = await res.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob)
      reader.onload = () => {
        setNoiseImg(reader.result as string)
      }
    })()
  }, [])

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        ref={setSvgElement}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        viewBox="0 0 512 512"
        fill="none"
      >
        <rect
          id="r9"
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          rx={icon.radius}
          ry={icon.radius}
          fill={icon.bgColorType === 'LinearGradient' ? 'url(#ra)' : icon.bgColorType === 'RadialGradient' ? 'url(#rb)' : icon.primaryBgColor}
          stroke="#FFFFFF"
          stroke-width="0"
          stroke-opacity="100%"
          paint-order="stroke"
        ></rect>
        {icon.radialGlare ? (
          <rect
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            fill="url(#rc)"
            rx={icon.radius}
            ry={icon.radius}
            style={{
              mixBlendMode: 'overlay',
            }}
          ></rect>
        ) : null}
        {icon.noiseTexture && noiseImg ? (
          <image
            href={noiseImg}
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            clip-path="url(#clip)"
            opacity={`${icon.noiseOpacity}%`}></image>
        ) : null}
        <clipPath id="clip">
          <use xlinkHref="#r9"></use>
        </clipPath>
        <defs>
          <linearGradient
            id="ra"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(45)"
            style={{
              transformOrigin: 'center center 0px',
            }}
          >
            <stop stop-color={icon.primaryBgColor}></stop>
            <stop offset="1" stop-color={icon.secondaryBgColor}></stop>
          </linearGradient>
          <radialGradient
            id="rb"
            cx="50%"
            cy="50%"
            r="100%"
            fx="50%"
            fy="0%"
            gradientUnits="objectBoundingBox">
            <stop stop-color={icon.primaryBgColor}></stop>
            <stop offset="1" stop-color={icon.secondaryBgColor}></stop>
          </radialGradient>
          <radialGradient
            id="rc"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(256) rotate(90) scale(512)"
          >
            <stop stop-color="white"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
          </radialGradient>
        </defs>
        <Icon
          x={ICON_X}
          y={ICON_Y}
          name={icon.iconName}
          color={icon.color}
          strokeWidth={1}
          width={icon.iconSize}
          height={icon.iconSize}
        />
      </svg>
    </>
  );
};
