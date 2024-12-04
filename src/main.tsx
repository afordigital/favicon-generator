import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SidebarProvider } from "./components/ui/sidebar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider
      style={{
        "--sidebar-width": "20rem",
        "--sidebar-width-mobile": "20rem",
      }}
    >
      <App />
    </SidebarProvider>
  </StrictMode>
);
