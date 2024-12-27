import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { iconNames, isLucideIcon } from "./icons";
import { IconProps } from "@/App";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DEFAULT_ICON: IconProps = {
  id: crypto.randomUUID(),
  primaryBgColor: '#3c495d',
  secondaryBgColor: '#3c495d',
  radialGlare: false,
  bgColorType: 'RadialGradient',
  angle: 0,
  radius: 32,
  strokeWidth: 2,
  strokeColor: '#ffffff',
  noiseTexture: false,
  noiseOpacity: 0,
  iconName: 'Bike',
  iconSize: 400,
  color: '#ffffff',
  xOffset: 0,
  yOffset: 0,
};


export const getRandomIcon = (): IconProps => {
  const randomIconIndex = Math.floor(Math.random() * iconNames.length);
  const randomIconName = iconNames[randomIconIndex];
  if (!isLucideIcon(randomIconName)) throw new Error("Unreachable");

  const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  const getRandomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;


    console.log(randomIconName);

  return {
    ...DEFAULT_ICON,
    id: crypto.randomUUID(),
    primaryBgColor: getRandomColor(),
    bgColorType: 'Solid',
    radius: getRandomNumber(0, 50),
    iconName: randomIconName,
    iconSize: getRandomNumber(200, 512),
    color: getRandomColor(),
  };
}

export const debounce = <Fn extends (...args: any[]) => any>(
  fn: Fn,
  delay: number
) => {
  let timeoutId: number | undefined = undefined;
  return (...args: Parameters<Fn>) => {
    if (timeoutId) {
      globalThis.clearTimeout(timeoutId);
    }
    timeoutId = globalThis.setTimeout(fn, delay, ...args);
  };
};


