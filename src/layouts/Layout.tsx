import { LeftSidebar } from "@/components/left-panel/Sidebar";
import { RightSidebar } from "@/components/right-panel/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <LeftSidebar />
        <SidebarTrigger className="text-white ml-2 mt-2 border rounded-[4px] border-white border-solid" />
      </SidebarProvider>

      <main className="flex w-full text-white">{children}</main>

      <SidebarProvider>
        <SidebarTrigger className="text-white mt-2 border rounded-[4px] border-white border-solid" />
        <RightSidebar />
      </SidebarProvider>
    </ThemeProvider>
  );
}
