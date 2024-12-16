import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { iconNames, isLucideIcon } from "./iconsMap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandomIcon = () => {
  const randomIconIndex = Math.floor(Math.random() * iconNames.length);
  const randomIcon = iconNames[randomIconIndex];
  if (!isLucideIcon(randomIcon)) throw new Error("Unreachable");
  return randomIcon;
};
