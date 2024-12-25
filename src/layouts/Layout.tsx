import Header from '@/components/header/Header';
import { LeftSidebar } from '@/components/left-panel/Sidebar';
import { RightSidebar } from '@/components/right-panel/Sidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col w-full text-white h-screen">
      <Header />
      <main className="flex-grow grid grid-cols-[auto,1fr,auto] overflow-hidden w-full justify-center">
        <SidebarProvider>
          <LeftSidebar />
          <SidebarTrigger className="border mt-2 rounded-[4px] border-solid" />
        </SidebarProvider>
        <SidebarInset className="flex justify-center w-full">{children}</SidebarInset>
        <SidebarProvider>
          <SidebarTrigger className="border mt-2 rounded-[4px] border-solid" />
          <RightSidebar />
        </SidebarProvider>
      </main>
    </div>
  );
}
