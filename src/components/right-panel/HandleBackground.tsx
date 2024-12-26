import { Hex } from '../Hex';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Switch } from '../ui/switch';
import { BgColorType } from '@/App';
import { useIconContext } from '@/context/useIconContext';

export const HandleBackground = () => {
  const { icon, setIcon } = useIconContext();

  return (
    <section className="flex flex-col gap-4 mt-4">
      <label htmlFor="bgColorType" className="flex items-center justify-between">
        Fill Type
        <Select
          value={icon.bgColorType}
          onValueChange={(value) => setIcon({ ...icon, bgColorType: value as BgColorType })}
        >
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
        {icon.bgColorType !== 'Solid' ? 'Primary bg color' : 'Background color'}
        <Hex keyName="primaryBgColor" />
      </label>
      {icon.bgColorType !== 'Solid' ? (
        <label className="flex items-center justify-between">
          Secondary bg color
          <Hex keyName="secondaryBgColor" />
        </label>
      ) : null}
      <label className="flex items-center justify-between">
        <p>Radial glare</p>
        <Switch
          onCheckedChange={(checked) => {
            setIcon({ ...icon, radialGlare: checked });
          }}
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
          type="number"
          value={icon.radius}
        />
      </label>
      <label className="flex items-center justify-between">
        <p>Noise Texture</p>
        <Switch
          onCheckedChange={(checked) => {
            setIcon({ ...icon, noiseTexture: checked });
          }}
          defaultChecked={icon.noiseTexture}
          checked={icon.noiseTexture}
        />
      </label>
      {icon.noiseTexture && (
        <label className="flex items-center justify-between">
          <p>Noise Opacity</p>
          <Input
            onChange={(event) => {
              setIcon({ ...icon, noiseOpacity: Number(event.target.value) });
            }}
            className="max-w-[200px]"
            type="number"
            value={icon.noiseOpacity}
          />
        </label>
      )}
    </section>
  );
};
