import { icons as LucideIcons } from "lucide-react";

export const icons = LucideIcons;

export type Icon = keyof typeof icons;

export const iconNames = Object.keys(icons);
export const isLucideIcon = (iconName: string): iconName is Icon => {
  return iconNames.includes(iconName);
};
