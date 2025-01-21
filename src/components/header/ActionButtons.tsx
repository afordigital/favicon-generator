import { Button } from '../ui/button';
import { useIconContext } from '@/context/useIconContext';
import { downloadAsPng, downloadSvg } from '@/lib/dom';
import { toast } from '@pheralb/toast';

export const DownloadButtons = ({ visibility }: { visibility: boolean }) => {
  const { svgElement, icon, lastIcons, setLastIcons } = useIconContext();

  return (
    <div
      className={`flex w-[90%] sm:max-w-full items-center ${visibility ? 'flex flex-col sm:flex-row' : 'hidden'} justify-end gap-2`}
    >
      <Button
        variant="outline"
        className="w-full sm:w-fit"
        onClick={() => {
          const newIcon = { ...icon, id: crypto.randomUUID() };

          const storedIcons = JSON.parse(localStorage.getItem('lastIcons') ?? '[]');
          localStorage.setItem('lastIcons', JSON.stringify([...storedIcons, newIcon]));
          setLastIcons([...lastIcons, newIcon]);
          toast.success({
            text: 'Icon saved successfully!',
          });
        }}
      >
        Save Favicon
      </Button>
      <Button
        variant="outline"
        className="w-full sm:w-fit"
        onClick={() => {
          if (!svgElement) return;
          downloadSvg(svgElement);
          toast.success({
            text: 'Icon downloaded successfully!',
          });
        }}
        disabled={!svgElement}
      >
        Download SVG
      </Button>
      <Button
        variant="outline"
        className="w-full sm:w-fit"
        onClick={() => {
          if (!svgElement) return;
          downloadAsPng(svgElement);
          toast.success({
            text: 'Icon downloaded successfully!',
          });
        }}
        disabled={!svgElement}
      >
        Download PNG
      </Button>
    </div>
  );
};
