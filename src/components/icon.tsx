import { icons } from "lucide-react";
import { ComponentProps } from "react";

const Icon = ({
  name,
  ...props
}: {
  name: keyof typeof icons;
} & ComponentProps<"svg">) => {
  const LucideIcon = icons[name];

  return <LucideIcon {...props} />;
};

export default Icon;
