import { ComponentProps } from 'react';
import { useIconContext } from '@/context/useIconContext';
import { IconName } from '@/lib/icons';
import { icons } from 'lucide-react';

const Icon = ({
  name,
  ...props
}: {
  name: IconName;
} & ComponentProps<'svg'>) => {
  const { importedIcons } = useIconContext();

  const allIcons = { ...icons, ...importedIcons } as const;

  const Icon = allIcons[name as keyof typeof allIcons];

  if (!Icon) {
    console.error(`Icon "${name}" not found in lucide-react nor in your own imported icons.`);
    return null;
  }

  return <Icon {...props} />;
};

export default Icon;
