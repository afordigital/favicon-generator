import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { iconsMap } from "@/lib/iconsMap";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useContext, useState } from "react";
import { IconContext } from "@/App";
import { Button } from "../ui/button";
import { categories } from "@/lib/categories";
import { CollapsibleComponent } from "./Collapsible";
import { Shuffle } from "lucide-react";
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

          <CollapsibleComponent
            title="All icons"
            children={
              <SidebarGroupContent>
                <SidebarMenu className="grid grid-cols-4 gap-2">
                  {Object.entries(iconsMap)
                    .filter(([key]) =>
                      key.toLowerCase().includes(iconSearch.toLowerCase())
                    )
                    .map(([key, IconComponent]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setIcon({ ...icon, iconName: key });
                        }}
                        className="rounded-[4px] bg-[#09090b] transition duration-100 ease-in-out  hover:bg-[#27272a] border-[#27272a] border-2 p-[30px]"
                      >
                        <IconComponent className="aspect-square" />
                      </button>
                    ))}
                </SidebarMenu>
              </SidebarGroupContent>
            }
          />

          <CollapsibleComponent
            title="Categories"
            children={
              <SidebarGroupContent>
                <SidebarMenu className="flex flex-col">
                  {Object.entries(categories).map(([categoryName, icons]) => (
                    <>
                      <CollapsibleComponent
                        title={categoryName}
                        key={categoryName}
                      >
                        <div className="grid grid-cols-4 gap-[2px]">
                          {icons.map((iconName) => {
                            const IconComp = iconsMap[iconName];
                            return (
                              <button
                                key={iconName}
                                className="rounded-[4px] bg-[#09090b] transition duration-100 ease-in-out  hover:bg-[#27272a] border-[#27272a] border-2 p-[30px]"
                                onClick={() => {
                                  setIcon({
                                    ...icon,
                                    iconName,
                                  });
                                }}
                              >
                                <IconComp className="aspect-square" />
                              </button>
                            );
                          })}
                        </div>
                      </CollapsibleComponent>
                    </>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            }
          />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
