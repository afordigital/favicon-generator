import { IconContext } from "@/App";
import { useContext } from "react";
import { Button } from "../ui/button";
import { Undo, Redo } from "lucide-react";

export const ActionButtons = () => {
  const { undo, redo, canUndo, canRedo } = useContext(IconContext);

  return (
    <div className="flex gap-4 mb-10">
      <Button
        className="px-6 py-2 border-2 border-white border-solid hover:bg-neutral-800"
        onClick={undo}
        variant="outline"
        disabled={!canUndo}
      >
      <Undo />
        Undo
      </Button>
      <Button
        className="px-6 py-2 border-2 border-white border-solid hover:bg-neutral-800"
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
