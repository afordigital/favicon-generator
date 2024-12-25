import { StrictMode } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { createRoot } from 'react-dom/client';

import './index.css';

import App from './App.tsx';
import { SidebarProvider } from './components/ui/sidebar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>,
);
