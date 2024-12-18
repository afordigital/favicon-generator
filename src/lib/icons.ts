import { icons as LucideIcons } from 'lucide-react';

export const icons = LucideIcons;

export type Icon = keyof typeof icons;

export const iconNames = Object.keys(icons);
export const isLucideIcon = (iconName: string): iconName is Icon => {
  return iconNames.includes(iconName);
};

// This function converts the icon object into an array of arrays,
// given the number of columns and the array of icons it will generate a grid of icons.
export const generateIconsGrid = <T>({ cols = 4, arr }: { cols?: number; arr: T[] }) => {
  // create 4 columns for each row
  const rows = Array.from(
    {
      length: Math.ceil(arr.length / cols),
    },
    (_, idx) => arr.slice(idx * cols, idx * cols + cols),
  );

  return rows;
};
