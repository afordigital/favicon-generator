import { Collapsible } from '../left-panel/Collapsible';
import { HandleBackground } from './HandleBackground';
import { HandleIcon } from './HandleIcon';
import { Sidebar, SidebarContent } from '@/components/ui/sidebar';

export function RightSidebar() {
  return (
    <Sidebar
      side="right"
      className="border-gray-800"
      style={{ paddingTop: 'calc(var(--header-height) + 0.5rem)' }}
      variant="floating"
    >
      <SidebarContent className="py-2 text-xs">
        <Collapsible defaultOpen trigger="Background Props">
          <HandleBackground />
        </Collapsible>
        <Collapsible defaultOpen trigger="Icon Props">
          <HandleIcon />
        </Collapsible>
        <Collapsible trigger="Help">
          <p>Sálvame de comuafor por favor</p>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  );
}
