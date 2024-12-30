/// <reference types="vite/client" />

import 'react';

declare module 'react' {
  interface CSSProperties {
    '--sidebar-width'?: string;
    '--sidebar-width-mobile'?: string;
    '--bgColor'?: string;
    '--zoom'?: number;
  }
}
