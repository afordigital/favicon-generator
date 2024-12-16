import { IconContext } from "@/App";
import { useContext } from "react";
import Icon from "../icon";
import { Button } from "../ui/button";

export const Canvas = () => {
  const { icon, undo, redo, canUndo, canRedo } = useContext(IconContext);

  return (
    <section className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex gap-4 mb-10">
        <Button
          className="px-6 py-2 border-2 border-white border-solid hover:bg-neutral-800"
          onClick={undo}
          variant="outline"
          disabled={!canUndo}
        >
          Undo
        </Button>
        <Button
          className="px-6 py-2 border-2 border-white border-solid hover:bg-neutral-800"
          onClick={redo}
          variant="outline"
          disabled={!canRedo}
        >
          Redo
        </Button>
      </div>
      <article className="flex items-center justify-center p-8 w-fit h-fit aspect-square bg-neutral-900">
        <div
          style={{ "--bgColor": icon.bgColor, borderRadius: icon.radius }}
          className={`w-[512px] h-[512px]  bg-[var(--bgColor)] flex items-center justify-center `}
        >
          <Icon
            name={icon.iconName}
            color={icon.iconColor}
            strokeWidth={1}
            fill={icon.bgColor}
            width={icon.iconSize}
            height={icon.iconSize}
            offsets={[icon.xOffset ?? 0, icon.yOffset ?? 0]}
          />
        </div>
      </article>
    </section>
  );
};
