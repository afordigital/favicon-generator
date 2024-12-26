import { Button } from '../ui/button';
import { useIconContext } from '@/context/useIconContext';
import { downloadAsPng, downloadSvg } from '@/lib/dom';

export const DownloadButtons = () => {
  const { svgElement, icon } = useIconContext();

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="outline"
        className="flex-1"
        onClick={() => {
          const storedIcons = localStorage.getItem('lastIcons') ?? '[]';
          localStorage.setItem('lastIcons', JSON.stringify([...JSON.parse(storedIcons), icon]));
        }}
      >
        Save Favicon
      </Button>
      <Button
        variant="outline"
        className="flex-1"
        onClick={() => {
          if (!svgElement) return;
          downloadSvg(svgElement);
        }}
        disabled={!svgElement}
      >
        Download SVG
      </Button>
      <Button
        variant="outline"
        className="flex-1"
        onClick={() => {
          if (!svgElement) return;
          downloadAsPng(svgElement);
        }}
        disabled={!svgElement}
      >
        Download PNG
      </Button>
    </div>
  );
};
