import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { icons, isLucideIcon } from "@/lib/iconsMap";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
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
        <SidebarGroup>
          <div className="flex gap-2">
            <Label htmlFor="email" />
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
          </div>
          <CollapsibleComponent title="All icons">
            <SidebarGroupContent>
              <SidebarMenu className="grid grid-cols-4 max">
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
                      className="rounded-[4px]"
                    >
                      <IconComponent className="aspect-square w-[40px]" />
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
