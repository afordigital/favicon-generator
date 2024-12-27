import Icon from '../icon';
import noiseImg from '@/assets/noise.svg';
import { useIconContext } from '@/context/useIconContext';

const CANVAS_SIZE = 512;

export const Canvas = () => {
  const { icon, setSvgElement } = useIconContext();

  const ICON_X = icon.iconSize ? CANVAS_SIZE / 2 - icon.iconSize / 2 + (icon.xOffset ?? 0) : 0 + (icon.xOffset ?? 0);
  const ICON_Y = icon.iconSize ? CANVAS_SIZE / 2 - icon.iconSize / 2 + (icon.yOffset ?? 0) : 0 + (icon.yOffset ?? 0);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      ref={setSvgElement}
      width={CANVAS_SIZE}
      height={CANVAS_SIZE}
      viewBox="0 0 512 512"
      fill="none"
    >
      <defs>
        <filter id="noise" opacity={icon.noiseOpacity}>
          <feTurbulence type="fractalNoise" baseFrequency="19.5" numOctaves="10" result="turbulence" />
          <feComposite operator="in" in="turbulence" in2="SourceAlpha" result="composite" />
          <feColorMatrix in="composite" type="luminanceToAlpha" />
          <feBlend in="SourceGraphic" in2="composite" mode="color-burn" />
        </filter>

        <linearGradient
          id="linearGradient"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(45)"
          style={{
            transformOrigin: 'center center 0px',
          }}
        >
          <stop stopColor={icon.primaryBgColor}></stop>
          <stop offset="1" stopColor={icon.secondaryBgColor}></stop>
        </linearGradient>

        <radialGradient
          id="radialGradient"
          cx="50%"
          cy="50%"
          r="100%"
          fx="50%"
          fy="0%"
          gradientUnits="objectBoundingBox"
        >
          <stop stopColor={icon.primaryBgColor}></stop>
          <stop offset="1" stopColor={icon.secondaryBgColor}></stop>
        </radialGradient>

        <radialGradient
          id="radialGlare"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(256) rotate(90) scale(512)"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </radialGradient>

        <clipPath id="image-clip">
          <use xlinkHref="#image"></use>
        </clipPath>
      </defs>

      <rect
        id="image"
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        rx={icon.radius}
        ry={icon.radius}
        fill={
          icon.bgColorType === 'LinearGradient'
            ? 'url(#linearGradient)'
            : icon.bgColorType === 'RadialGradient'
              ? 'url(#radialGradient)'
              : icon.primaryBgColor
        }
        stroke="#FFFFFF"
        strokeWidth="0"
        strokeOpacity="100%"
        paintOrder="stroke"
      />

      {icon.radialGlare && (
        <rect
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          fill="url(#radialGlare)"
          rx={icon.radius}
          ry={icon.radius}
          style={{
            mixBlendMode: 'overlay',
          }}
        />
      )}

      <g
        transform={`rotate(${icon.angle} 0 0)`}
        style={{
          transformOrigin: `${ICON_X + (icon.iconSize ?? 400) / 2}px ${ICON_Y + (icon.iconSize ?? 400) / 2}px`,
        }}
      >
        <Icon
          x={ICON_X}
          y={ICON_Y}
          name={icon.iconName}
          color={icon.color}
          strokeWidth={1}
          width={icon.iconSize}
          height={icon.iconSize}
        />
      </g>

      <image
        href={noiseImg}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        rx={icon.radius}
        ry={icon.radius}
        opacity={`${icon.noiseOpacity}%`}
        clip-path="url(#image-clip)"
      />
    </svg>
  );
};
