import { ComponentProps } from 'react';
import { buttonVariants } from '../ui/button';
import { useIconContext } from '@/context/useIconContext';
import { cn } from '@/lib/utils';
import parse, { DOMNode, domToReact, Element } from 'html-react-parser';
import { Folder } from 'lucide-react';

export const UploadInput = () => {
  const { icon, setIcon, setImportedIcons } = useIconContext();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    const [file] = files ?? [];
    if (!file) return;

    const iconName = file.name;

    const text = await file.text();
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(text, 'image/svg+xml');
    const {
      documentElement: { outerHTML: svgElement },
    } = svgDoc;

    setImportedIcons((currentImportedIcons) => ({
      ...currentImportedIcons,
      [iconName]: (props: ComponentProps<'svg'>) =>
        parse(svgElement, {
          replace: (domNode) => {
            if (domNode.nodeType !== Node.ELEMENT_NODE) return domNode;
            if (!(domNode instanceof Element)) return domNode;
            if (domNode.name !== 'svg') return domNode;
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={domNode.attribs.viewBox ?? '0 0 24 24'}
                {...props}
                className={`lucide icon ${props.className}`}
              >
                {domToReact(domNode.children as DOMNode[])}
              </svg>
            );
          },
        }),
    }));
    setIcon({ ...icon, iconName });
  };

  return (
    <label
      className={cn(buttonVariants({ variant: 'outline' }), 'cursor-pointer')}
      onKeyDown={(event) => {
        if (['Enter', ' '].includes(event.key)) {
          event.preventDefault();
          event.currentTarget.click();
        }
      }}
      tabIndex={0}
    >
      <input type="file" accept=".svg" onChange={handleFileChange} className="hidden" />

      <Folder />
    </label>
  );
};
