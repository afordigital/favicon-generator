import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { iconNames, isLucideIcon } from "./icons";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandomIcon = () => {
  const randomIconIndex = Math.floor(Math.random() * iconNames.length);
  const randomIcon = iconNames[randomIconIndex];
  if (!isLucideIcon(randomIcon)) throw new Error("Unreachable");
  return randomIcon;
};

export const debounce = <Fn extends (...args: any[]) => any>(
  fn: Fn,
  delay: number
) => {
  let timeoutId: number | undefined = undefined;
  return (...args: Parameters<Fn>) => {
    if (timeoutId) {
      globalThis.clearTimeout(timeoutId);
    }
    // @ts-expect-error
    timeoutId = globalThis.setTimeout(fn, delay, ...args);
  };
};
