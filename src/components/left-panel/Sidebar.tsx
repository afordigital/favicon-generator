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
import { useContext } from "react";
import { IconContext } from "@/App";
import { Button } from "../ui/button";

export function LeftSidebar() {
  const context = useContext(IconContext);

  const { setIcon } = context;

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
            />
          </div>
          <SidebarGroupLabel>All icons</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="grid grid-cols-4 max">
              {Object.entries(iconsMap).map(([key, IconComponent]) => (
                <Button
                  key={key}
                  variant="outline"
                  onClick={() => {
                    console.log(key);
                    setIcon(key as keyof typeof iconsMap);
                  }}
                  className="rounded-[4px]"
                >
                  <IconComponent className="aspect-square w-[40px]" />
                </Button>
              ))}
              {Object.entries(iconsMap).map(([key, IconComponent]) => (
                <Button
                  key={key}
                  variant="outline"
                  onClick={() => {
                    console.log(key);
                    setIcon(key as keyof typeof iconsMap);
                  }}
                  className="rounded-[4px]"
                >
                  <IconComponent className="aspect-square w-[40px]" />
                </Button>
              ))}
              {Object.entries(iconsMap).map(([key, IconComponent]) => (
                <Button
                  key={key}
                  variant="outline"
                  onClick={() => {
                    console.log(key);
                    setIcon(key as keyof typeof iconsMap);
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
