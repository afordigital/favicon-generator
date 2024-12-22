import { Header } from '@/components/header/Header';
import { LeftSidebar } from '@/components/left-panel/Sidebar';
import { RightSidebar } from '@/components/right-panel/Sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col gap-4 overflow-hidden">
        <Header />
        <section className="relative ">
          <SidebarProvider>
            <LeftSidebar />
            <SidebarTrigger className="text-white mt-2 p-6 border rounded-[4px] border-solid" />

            <main className="flex w-full text-white">{children}</main>

            <SidebarProvider className="w-fit">
              <SidebarTrigger className="text-white mt-2 p-6 border rounded-[4px] border-solid" />
              <RightSidebar />
            </SidebarProvider>
          </SidebarProvider>
        </section>
      </div>
    </ThemeProvider>
  );
}
