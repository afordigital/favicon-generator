import { ComponentProps } from 'react';
import * as ShadCNCollapsible from '../ui/collapsible';
import { ChevronDown } from 'lucide-react';

export const Collapsible = ({
  trigger,
  children,
  onCollapsibleChange,
  ...props
}: ComponentProps<typeof ShadCNCollapsible.Collapsible> & {
  trigger: React.ReactNode;
  onCollapsibleChange?: (open: boolean) => void;
}) => {
  return (
    <ShadCNCollapsible.Collapsible
      {...props}
      className={`group/collapsible w-full ${props.className}`}
      onOpenChange={onCollapsibleChange}
    >
      <div className="px-2">
        <ShadCNCollapsible.CollapsibleTrigger className="w-full flex justify-between items-center gap-2 bg-neutral-800 p-2 rounded-md">
          <span className="text-xs font-medium text-neutral-300">{trigger}</span>
          <div className="text-neutral-300">
            <ChevronDown
              size={16}
              color="currentColor"
              className="transition-transform group-data-[state=open]/collapsible:rotate-180"
            />
          </div>
        </ShadCNCollapsible.CollapsibleTrigger>
      </div>

      <ShadCNCollapsible.CollapsibleContent className="h-full px-2">{children}</ShadCNCollapsible.CollapsibleContent>
    </ShadCNCollapsible.Collapsible>
  );
};
