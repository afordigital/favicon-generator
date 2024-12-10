import { IconContext } from "@/App";
import { iconsMap } from "@/lib/iconsMap";
import { useContext } from "react";

export const Canvas = () => {
  const { icon, undo, redo, canUndo, canRedo } = useContext(IconContext);

  const IconComponent = iconsMap[icon.iconName];

  return (
    <section className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex gap-4 mb-10">
        <button
          className="px-6 py-2 border-2 border-white border-solid hover:bg-neutral-800"
          onClick={undo}
          disabled={!canUndo}
        >
          Undo
        </button>
        <button
          className="px-6 py-2 border-2 border-white border-solid hover:bg-neutral-800"
          onClick={redo}
          disabled={!canRedo}
        >
          Redo
        </button>
      </div>
      <article className="flex items-center justify-center p-8 w-fit h-fit aspect-square bg-neutral-900">
        <div
          style={{ "--bgColor": icon.bgColor }}
          className={`w-[512px] h-[512px] bg-[var(--bgColor)] flex items-center justify-center `}
        >
          <IconComponent
            strokeWidth={1}
            fill={icon.bgColor}
            width={icon.iconSize}
            height={icon.iconSize}
            color={icon.iconColor}
            offset={(icon.xOffset, icon.yOffset)}
          />
        </div>
      </article>
    </section>
  );
};
