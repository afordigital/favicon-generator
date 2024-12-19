import { useContext } from 'react';
import { CollapsibleComponent } from '../left-panel/Collapsible';
import { Button } from '../ui/button';
import { HandleBackground } from './HandleBackground';
import { HandleIcon } from './HandleIcon';
import { IconContext } from '@/App';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu } from '@/components/ui/sidebar';
import { downloadSvg } from '@/lib/dom';
import { toPng } from 'html-to-image';

export function RightSidebar() {
  const { svgElement, icon } = useContext(IconContext);

  const downloadAsPng = async () => {
    if (!svgElement) return;

    const image = await toPng(svgElement as unknown as HTMLElement);
    const link = document.createElement('a');
    link.href = image;
    link.download = 'icon.png';
    link.click();
  };

  return (
    <Sidebar side="right" className="border-gray-800" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <div className="flex gap-2 p-1">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    const storedIcons = localStorage.getItem('lastIcons') ?? '[]';
                    localStorage.setItem('lastIcons', JSON.stringify([...JSON.parse(storedIcons), icon]));
                    if (!svgElement) return;
                    downloadSvg(svgElement);
                  }}
                  disabled={!svgElement}
                >
                  Download SVG
                </Button>
                <Button variant="outline" className="flex-1" onClick={downloadAsPng} disabled={!svgElement}>
                  Download PNG
                </Button>
              </div>
              <CollapsibleComponent title="Background Props">
                <HandleBackground />
              </CollapsibleComponent>
              <CollapsibleComponent title="Icon Props">
                <HandleIcon />
              </CollapsibleComponent>
              <CollapsibleComponent title="Help">
                <p>Sálvame de comuafor por favor</p>
              </CollapsibleComponent>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
