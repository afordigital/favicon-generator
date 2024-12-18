import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { SidebarGroup, SidebarGroupLabel } from "../ui/sidebar";

export const CollapsibleComponent = ({
  title,
  children,
  onClick
}: {
  title: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Collapsible defaultOpen className="group/collapsible flex-1">
      <SidebarGroup className="h-full">
        <SidebarGroupLabel className="bg-neutral-800" asChild>
          <CollapsibleTrigger onClick={onClick}>
            {title}
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent className="h-full">{children}</CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
};
