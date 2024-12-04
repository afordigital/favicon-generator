import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { Input } from "../ui/input";

export function RightSidebar() {
  return (
    <Sidebar side="right" className="border-gray-800" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pick a colorS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Input type="color" />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
