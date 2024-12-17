import { IconContext } from "@/App";
import { useContext, useMemo } from "react";
import { Input } from "../ui/input";
import { debounce } from "@/lib/utils";
import { Switch } from "../ui/switch";

export const HandleBackground = () => {
  const { icon, setIcon } = useContext(IconContext);

  const debouncedSetIcon = useMemo(() => debounce(setIcon, 150), [setIcon]);

  return (
    <section className="flex flex-col gap-4 mt-4">
      <label htmlFor="bgColor" className="flex items-center justify-between">
        <p>Background</p>
        <Input
          id="bgColor"
          onChange={(event) => {
            debouncedSetIcon({ ...icon, bgColor: event.target.value });
          }}
          className="max-w-[200px]"
          defaultValue={icon.bgColor}
          type="color"
          value={icon.bgColor}
        />
      </label>
      <label htmlFor="radius" className="flex items-center justify-between">
        <p>Radius</p>
        <Input
          id="radius"
          onChange={(event) => {
            setIcon({ ...icon, radius: Number(event.target.value) });
          }}
          className="max-w-[200px]"
          defaultValue={icon.radius}
          type="number"
          value={icon.radius}
        />
      </label>
      <label
        htmlFor="noiseOpacity"
        className="flex items-center justify-between"
      >
        <p>Noise Texture</p>
        <Switch
          id="noiseTexture"
          onCheckedChange={(checked) => {
            setIcon({ ...icon, noiseTexture: checked });
          }}
          defaultChecked={icon.noiseTexture}
          checked={icon.noiseTexture}
        />
      </label>
      {icon.noiseTexture && (
        <label
          htmlFor="noiseOpacity"
          className="flex items-center justify-between"
        >
          <p>Noise Opacity</p>
          <Input
            id="noiseOpacity"
            onChange={(event) => {
              setIcon({ ...icon, noiseOpacity: Number(event.target.value) });
            }}
            className="max-w-[200px]"
            defaultValue={icon.noiseOpacity}
            type="number"
            value={icon.noiseOpacity}
          />
        </label>
      )}
    </section>
  );
};
