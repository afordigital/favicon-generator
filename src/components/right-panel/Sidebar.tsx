import { useContext } from 'react';
import { CollapsibleComponent } from '../left-panel/Collapsible';
import { Button } from '../ui/button';
import { HandleBackground } from './HandleBackground';
import { HandleIcon } from './HandleIcon';
import { IconContext } from '@/App';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu } from '@/components/ui/sidebar';
import { downloadSvg } from '@/lib/dom';

export function RightSidebar() {
  const { svgElement } = useContext(IconContext);

  return (
    <Sidebar side="right" className="border-gray-800" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <div className="w-full">
                <Button
                  variant="outline"
                  onClick={() => {
                    if (!svgElement) return;
                    downloadSvg(svgElement);
                  }}
                  disabled={!svgElement}
                >
                  Download SVG
                </Button>
                <Button variant="outline" onClick={() => {}} disabled={!svgElement}>
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
                <p>Hola</p>
              </CollapsibleComponent>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
