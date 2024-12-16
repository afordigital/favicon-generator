import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { categories } from "./categories";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandomIcon = () => {
  const categoryLength = Object.keys(categories).length;
  const randomCategoryIndex = Math.floor(Math.random() * categoryLength);
  const randomCategory = Object.keys(categories)[randomCategoryIndex];

  if (categories[randomCategory].length === 0) return getRandomIcon();

  const randomIcon = Math.floor(
    Math.random() * categories[randomCategory].length
  );

  return categories[randomCategory][randomIcon];
};
