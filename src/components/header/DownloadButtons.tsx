import { useContext } from 'react';
import { Button } from '../ui/button';
import { IconContext } from '@/App';
import { downloadAsPng, downloadSvg } from '@/lib/dom';

export const DownloadButtons = () => {
  const { svgElement, icon } = useContext(IconContext);

  return (
    <div className="flex gap-4">
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
