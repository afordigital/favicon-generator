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
import { Button } from "../ui/button";
import { useContext } from "react";
import { IconContext } from "@/App";
import { downloadSvg } from "@/lib/dom";

export function RightSidebar() {
  const { svgElement } = useContext(IconContext);

  return (
    <Sidebar side="right" className="border-gray-800" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
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
