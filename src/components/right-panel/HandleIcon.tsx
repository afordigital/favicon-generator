import { Hex } from '../Hex';
import { Input } from '../ui/input';
import { useIconContext } from '@/context/useIconContext';

export const HandleIcon = () => {
  const { icon, setIcon } = useIconContext();

  return (
    <section className="flex flex-col gap-4 mt-4">
      <label className="flex items-center justify-between">
        Icon color
        <Hex keyName="color" />
      </label>
      <label htmlFor="iconSize" className="flex items-center justify-between">
        Icon size
        <Input
          id="iconSize"
          onChange={(event) => {
            setIcon({
              ...icon,
              iconSize: event.target.value ? Number(event.target.value) : undefined,
            });
          }}
          className="max-w-[200px]"
          type="number"
          value={icon.iconSize}
        />
      </label>
      <label htmlFor="angle" className="flex items-center justify-between">
        Angle
        <Input
          id="angle"
          onChange={(event) => {

            setIcon({
              ...icon,
              angle: event.target.value ? Math.max(-360, Math.min(Number(event.target.value), 360)) : undefined,
            });
          }}
          className="max-w-[200px]"
          type="number"
          value={icon.angle}
          min={-360}
          max={360}
        />
      </label>
      <label htmlFor="xOffset" className="flex items-center justify-between">
        X Offset
        <Input
          id="xOffset"
          onChange={(event) => {
            setIcon({
              ...icon,
              xOffset: event.target.value ? Number(event.target.value) : undefined,
            });
          }}
          className="max-w-[200px]"
          type="number"
          value={icon.xOffset}
        />
      </label>
      <label htmlFor="yOffset" className="flex items-center justify-between">
        Y Offset
        <Input
          id="yOffset"
          onChange={(event) => {
            setIcon({
              ...icon,
              yOffset: event.target.value ? Number(event.target.value) : undefined,
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
