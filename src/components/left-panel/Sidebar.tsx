import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { iconsMap } from "@/lib/iconsMap";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useContext, useState } from "react";
import { IconContext } from "@/App";
import { Button } from "../ui/button";

export function LeftSidebar() {
  const { icon, setIcon } = useContext(IconContext);

  const [iconSearch, setIconSearch] = useState("");

  return (
    <Sidebar className="border-gray-800" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <div>
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
          </div>
          <SidebarGroupLabel>All icons</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="grid grid-cols-4 max">
              {Object.entries(iconsMap)
                .filter(([key]) =>
                  key.toLowerCase().includes(iconSearch.toLowerCase())
                )
                .map(([key, IconComponent]) => (
                  <Button
                    key={key}
                    variant="outline"
                    onClick={() => {
                      setIcon({ ...icon, iconName: key });
                    }}
                    className="rounded-[4px]"
                  >
                    <IconComponent className="aspect-square w-[40px]" />
                  </Button>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
