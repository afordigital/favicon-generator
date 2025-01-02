import { buttonVariants } from '../ui/button';
import { useIconContext } from '@/context/useIconContext';
import { cn } from '@/lib/utils';
import { Folder } from 'lucide-react';

export const UploadInput = () => {
  const { setIcon, setImportedIcons } = useIconContext();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('a');
    const file = event.target.files?.[0];
    console.log(file);
    console.log(event.target.files?.[0]);
    if (file) {
      const text = await file.text();
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(text, 'image/svg+xml');
      const svgElement = svgDoc.documentElement;
      const iconName = file.name;

      console.log(JSON.stringify(svgElement));
      console.log(svgElement);

      // Puedes realizar validaciones o ajustes al SVG aquí
      setImportedIcons(iconName);
    }
  };

  return (
    <label className={cn(buttonVariants({ variant: 'outline' }), 'cursor-pointer')}>
      <input type="file" accept=".svg" onChange={handleFileChange} className="hidden"></input>
      <Folder />
    </label>
  );
};
