import { IconContext } from "@/App";
import { useContext } from "react";
import { Input } from "../ui/input";

export const HandleBackground = () => {
  const { icon, setIcon } = useContext(IconContext);

  console.log(icon);

  return (
    <section className="flex-col gap-4 mt-4">
      <label htmlFor="bgColor">
        background
        <Input
          id="bgColor"
          onChange={(event) => {
            setIcon({ ...icon, bgColor: event.target.value });
          }}
          defaultValue={icon.bgColor}
          type="color"
          value={icon.bgColor}
        />
      </label>
      <label htmlFor="radius">
        radius
        <Input
          id="radius"
          onChange={(event) => {
            setIcon({ ...icon, radius: Number(event.target.value) });
          }}
          defaultValue={icon.radius}
          type="number"
          value={icon.radius}
        />
      </label>
    </section>
  );
};
