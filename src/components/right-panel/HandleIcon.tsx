import { IconContext } from "@/App";
import { useContext } from "react";
import { Input } from "../ui/input";

export const HandleIcon = () => {
  const { icon, setIcon } = useContext(IconContext);

  return (
    <section className="flex flex-col gap-4 mt-4">
      <label htmlFor="color" className="flex items-center justify-between">
        Color del icono
        <Input
          id="color"
          onChange={(event) => {
            setIcon({ ...icon, color: event.target.value });
          }}
          className="max-w-[200px]"
          type="color"
          value={icon.color}
        />
      </label>
      <label htmlFor="iconSize" className="flex items-center justify-between">
        Tamaño del icono
        <Input
          id="iconSize"
          onChange={(event) => {
            setIcon({
              ...icon,
              iconSize: event.target.value
                ? Number(event.target.value)
                : undefined,
            });
          }}
          className="max-w-[200px]"
          type="number"
          value={icon.iconSize}
        />
      </label>
      <label htmlFor="xOffset" className="flex items-center justify-between">
        Offset en x
        <Input
          id="xOffset"
          onChange={(event) => {
            setIcon({
              ...icon,
              xOffset: event.target.value
                ? Number(event.target.value)
                : undefined,
            });
          }}
          className="max-w-[200px]"
          type="number"
          value={icon.xOffset}
        />
      </label>
      <label htmlFor="yOffset" className="flex items-center justify-between">
        Offset en y
        <Input
          id="yOffset"
          onChange={(event) => {
            setIcon({
              ...icon,
              yOffset: event.target.value
                ? Number(event.target.value)
                : undefined,
            });
          }}
          className="max-w-[200px]"
          type="number"
          value={icon.yOffset}
        />
      </label>
    </section>
  );
};
