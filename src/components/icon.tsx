import { icons } from "lucide-react";
import { ComponentProps } from "react";

const Icon = ({
  name,
  ...props
}: {
  name: keyof typeof icons;
} & ComponentProps<"svg">) => {
  const LucideIcon = icons[name];


  if (!LucideIcon) {
    console.error(`Icon "${name}" not found in lucide-react.`);
    return null;
  }

  return <LucideIcon {...props} />;
};

export default Icon;
