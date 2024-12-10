import { IconContext } from "@/App";
import { useContext } from "react";
import { Input } from "../ui/input";

export const HandleBackground = () => {
  const { icon, setIcon } = useContext(IconContext);
  return (
    <section>
      <label htmlFor="bgColor">
        Color del background:
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
    </section>
  );
};
