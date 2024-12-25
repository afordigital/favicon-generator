import { Button } from '../ui/button';
import { useIconContext } from '@/context/useIconContext';
import { Redo, Undo } from 'lucide-react';

export const ActionButtons = () => {
  const { undo, redo, canUndo, canRedo } = useIconContext();

  return (
    <div className="flex gap-4">
      <Button
        className="px-6 py-2 border-2 border-white text-white border-solid hover:bg-neutral-800"
        onClick={undo}
        variant="outline"
        disabled={!canUndo}
      >
        <Undo />
        Undo
      </Button>
      <Button
        className="px-6 py-2 border-2 text-white border-white border-solid hover:bg-neutral-800"
        onClick={redo}
        variant="outline"
        disabled={!canRedo}
      >
        Redo
        <Redo />
      </Button>
    </div>
  );
};
