import { IconContext } from "@/App";
import { useContext,  } from "react";
import { Input } from "../ui/input";

export const HandleIcon = () => {
  const { icon, setIcon } = useContext(IconContext);

  return (
    <section className="flex flex-col gap-4">
      <label htmlFor="iconColor">
        Color del icono:
        <Input
          id="iconColor"
          onChange={(event) => {
            setIcon({ ...icon, iconColor: event.target.value });
          }}
          type="color"
          value={icon.iconColor}
        />
      </label>
      <label htmlFor="iconSize">
        Tamaño del icono:
        <Input
          id="iconSize"
          onChange={(event) => {
            setIcon({ ...icon, iconSize: event.target.value ? Number(event.target.value) : undefined });
          }}
          type="number"
          value={icon.iconSize}
        />
      </label>
      <label htmlFor="xOffset">
        Offset en x:
        <Input
          id="xOffset"
          onChange={(event) => {
            setIcon({ ...icon, xOffset: event.target.value ? Number(event.target.value) : undefined });
          }}
          type="number"
          value={icon.xOffset}
        />
      </label>
      <label htmlFor="yOffset">
        Offset en y:
        <Input
          id="yOffset"
          onChange={(event) => {
            setIcon({ ...icon, yOffset: event.target.value ? Number(event.target.value) : undefined });
          }}
          type="number"
          value={icon.yOffset}
        />
      </label>
    </section>
  );
};
