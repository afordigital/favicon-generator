import { CollapsibleComponent } from '../left-panel/Collapsible';
import { HandleBackground } from './HandleBackground';
import { HandleIcon } from './HandleIcon';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu } from '@/components/ui/sidebar';

export function RightSidebar() {
  return (
    <Sidebar side="right" className="border-gray-800" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
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
