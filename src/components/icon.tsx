import { icons } from 'lucide-react';
import { ComponentProps } from 'react';

const Icon = ({ name, offsets = [0, 0], ...props }: { name: keyof typeof icons, offsets: [number, number] } & ComponentProps<"svg">) => {
  const LucideIcon = icons[name];

  const [xOffset = 0, yOffset = 0] = offsets

  console.log(xOffset, yOffset)

  return <LucideIcon {...props} style={{
    position: "relative",
    left: `${xOffset}px`,
    top:  `${yOffset}px`
  }} />;
};

export default Icon;