import { useMemo } from 'react';
import { Input } from './ui/input';
import type { IconProps } from '@/App';
import { useIconContext } from '@/context/useIconContext';
import { debounce } from '@/lib/utils';

interface HexProps {
  keyName: keyof IconProps;
}

export const Hex = ({ keyName }: HexProps) => {
  const { icon, setIcon } = useIconContext();
  const debouncedSetIcon = useMemo(() => debounce(setIcon, 150), [setIcon]);
  return (
    <div className="border border-zinc-800 bg-zinc-950 max-w-[120px] justify-between w-full flex items-center py-0.5 pl-1.5 pr-2.5 rounded-md">
      <Input
        onChange={(event) => {
          debouncedSetIcon({ ...icon, [keyName]: event.target.value });
        }}
        className="w-6 border-0 h-7 p-0"
        type="color"
        value={String(icon[keyName])}
      />
      <p>{String(icon[keyName])}</p>
    </div>
  );
};
