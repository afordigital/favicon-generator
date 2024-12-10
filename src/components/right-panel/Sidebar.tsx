import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { HandleIcon } from "./HandleIcon";
import { AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion";
import { Accordion, AccordionItem } from "../ui/accordion";
import { HandleBackground } from "./HandleBackground";

export function RightSidebar() {
  return (
    <Sidebar side="right" className="border-gray-800" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <Accordion
                type="multiple"
                defaultValue={["item-1", "item-2"]}
                className="flex flex-col gap-8"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger asChild>
                    <SidebarGroupLabel>Background Props</SidebarGroupLabel>
                  </AccordionTrigger>
                  <AccordionContent>
                    <HandleBackground />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger asChild>
                    <SidebarGroupLabel>Icon Props</SidebarGroupLabel>
                  </AccordionTrigger>
                  <AccordionContent>
                    <HandleIcon />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
