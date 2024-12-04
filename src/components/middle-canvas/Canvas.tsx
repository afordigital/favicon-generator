import { IconContext } from "@/App";
import { iconsMap } from "@/lib/iconsMap";
import { useContext } from "react";

export const Canvas = () => {
  const context = useContext(IconContext);
  const { icon } = context;

  const IconComponent = iconsMap[icon];

  return (
    <section className="flex items-center w-full h-full">
      <article className="w-[512px] aspect-square bg-neutral-900">
        <IconComponent strokeWidth={1} width={512} height={512} />
      </article>
    </section>
  );
};
