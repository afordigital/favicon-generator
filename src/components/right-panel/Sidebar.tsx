import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { HandleIcon } from "./HandleIcon";
import { HandleBackground } from "./HandleBackground";
import { CollapsibleComponent } from "../left-panel/Collapsible";

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
                <p>Hola</p>
              </CollapsibleComponent>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
