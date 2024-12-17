import { IconContext } from "@/App";
import { useContext } from "react";
import { Button } from "../ui/button";

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
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-undo"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>
        Undo
      </Button>
      <Button
        className="px-6 py-2border-2 border-white border-solid hover:bg-neutral-800"
        onClick={redo}
        variant="outline"
        disabled={!canRedo}
      >
        Redo
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-redo"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>
      </Button>
    </div>
  );
};
