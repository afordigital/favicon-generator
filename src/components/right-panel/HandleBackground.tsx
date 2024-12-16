import { IconContext } from "@/App";
import { useContext, useMemo } from "react";
import { Input } from "../ui/input";
import { debounce } from "@/lib/utils";

export const HandleBackground = () => {
  const { icon, setIcon } = useContext(IconContext);

  const debouncedSetIcon = useMemo(() => debounce(setIcon, 150), [setIcon]);

  return (
    <section className="flex-col gap-4 mt-4">
      <label htmlFor="bgColor">
        Background
        <Input
          id="bgColor"
          onChange={(event) => {
            debouncedSetIcon({ ...icon, bgColor: event.target.value });
          }}
          defaultValue={icon.bgColor}
          type="color"
          value={icon.bgColor}
        />
      </label>
      <label htmlFor="radius">
        Radius
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
