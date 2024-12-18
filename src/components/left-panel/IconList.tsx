import { memo } from "react";
import { IconProps } from "@/App";
import { Button } from "@/components/ui/button.tsx";
import { icons, isLucideIcon } from '@/lib/icons.ts';


type Props = {
  iconSearch: string;
  setIcon: (icon: Partial<IconProps>) => void;
}

const IconList = ({ iconSearch, setIcon }: Props) => {
  return Object.entries(icons)
    .filter(([key]) => key.toLowerCase().includes(iconSearch.toLowerCase()))
    .map(([key, IconComponent]) => (
      <Button
        key={key}
        variant="outline"
        onClick={() => {
          if (!isLucideIcon(key)) return;
          setIcon({ iconName: key });
        }}
        className="rounded-md aspect-square w-full h-auto [&_svg]:size-6"
      >
        <IconComponent />
      </Button>
    ));
};

export default memo(IconList, (prevProps, props) => prevProps.iconSearch === props.iconSearch);
