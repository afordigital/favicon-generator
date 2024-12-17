import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { icons, isLucideIcon } from "@/lib/icons";
import { Input } from "../ui/input";
import { useContext, useState } from "react";
import { IconContext } from "@/App";
import { Button } from "../ui/button";
import { Shuffle } from "lucide-react";
import { CollapsibleComponent } from "./Collapsible";
import { getRandomIcon } from "@/lib/utils";

export function LeftSidebar() {
  const { icon, setIcon } = useContext(IconContext);

  const [iconSearch, setIconSearch] = useState("");

  return (
    <Sidebar className="border-gray-800" variant="floating">
      <SidebarContent>
        <SidebarGroup className="flex flex-row gap-2">
          <Input
            type="search"
            placeholder="Search icons"
            className="rounded-[4px]"
            value={iconSearch}
            onChange={(event) => {
              setIconSearch(event.target.value);
            }}
          />
          <Button
            variant="outline"
            className="rounded-[4px]"
            onClick={() => {
              const randomIcon = getRandomIcon();
              setIcon({ ...icon, iconName: randomIcon });
            }}
          >
            <Shuffle />
          </Button>
        </SidebarGroup>

        <SidebarGroup>
          <CollapsibleComponent title="All icons">
            <SidebarGroupContent className="mt-3">
              <SidebarMenu className="grid grid-cols-[repeat(4,1fr)] gap-2">
                {Object.entries(icons)
                  .filter(([key]) =>
                    key.toLowerCase().includes(iconSearch.toLowerCase())
                  )
                  .map(([key, IconComponent]) => (
                    <Button
                      key={key}
                      variant="outline"
                      onClick={() => {
                        if (!isLucideIcon(key)) return;
                        setIcon({ ...icon, iconName: key });
                      }}
                      className="rounded-md aspect-square w-full h-auto [&_svg]:size-6"
                    >
                      <IconComponent />
                    </Button>
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleComponent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
