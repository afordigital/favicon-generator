import { BgColorType, IconContext } from "@/App";
import { useContext, useMemo } from "react";
import { Input } from "../ui/input";
import { debounce } from "@/lib/utils";
import { Switch } from "../ui/switch";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export const HandleBackground = () => {
  const { icon, setIcon } = useContext(IconContext);

  const debouncedSetIcon = useMemo(() => debounce(setIcon, 150), [setIcon]);

  return (
    <section className="flex flex-col gap-4 mt-4">
      <label htmlFor="bgColorType" className="flex items-center justify-between">
        <p>Fill Type</p>
        <Select
          value={icon.bgColorType}
          onValueChange={value => setIcon({ ...icon, bgColorType: value as BgColorType })}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="LinearGradient">Linear</SelectItem>
              <SelectItem value="RadialGradient">Radial</SelectItem>
              <SelectItem value="Solid">Solid</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </label>
      <label className="flex items-center justify-between">

        {icon.bgColorType !== 'Solid' ? <p>Primary bg color</p> : <p>Background color</p>}
        <Input
          onChange={(event) => {
            debouncedSetIcon({ ...icon, primaryBgColor: event.target.value });
          }}
          className="max-w-[200px]"
          defaultValue={icon.primaryBgColor}
          type="color"
          value={icon.primaryBgColor}
        />
      </label>
      {icon.bgColorType !== 'Solid' ? (
        <label className="flex items-center justify-between">
          <p>Secondary bg color</p>
          <Input
            onChange={(event) => {
              debouncedSetIcon({ ...icon, secondaryBgColor: event.target.value });
            }}
            className="max-w-[200px]"
            defaultValue={icon.secondaryBgColor}
            type="color"
            value={icon.secondaryBgColor}
          />
        </label>
      ) : null}
      <label
        className="flex items-center justify-between"
      >
        <p>Radial glare</p>
        <Switch
          onCheckedChange={(checked) => {
            setIcon({ ...icon, radialGlare: checked });
          }}
          defaultChecked={icon.radialGlare}
          checked={icon.radialGlare}
        />
      </label>
      <label className="flex items-center justify-between">
        <p>Radius</p>
        <Input
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
        className="flex items-center justify-between"
      >
        <p>Noise Texture</p>
        <Switch
          onCheckedChange={(checked) => {
            setIcon({ ...icon, noiseTexture: checked });
          }}
          defaultChecked={icon.noiseTexture}
          checked={icon.noiseTexture}
        />
      </label>
      {
        icon.noiseTexture && (
          <label
            className="flex items-center justify-between"
          >
            <p>Noise Opacity</p>
            <Input
              onChange={(event) => {
                setIcon({ ...icon, noiseOpacity: Number(event.target.value) });
              }}
              className="max-w-[200px]"
              defaultValue={icon.noiseOpacity}
              type="number"
              value={icon.noiseOpacity}
            />
          </label>
        )
      }
    </section >
  );
};
