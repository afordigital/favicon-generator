// iconContext.ts
import { createContext } from 'react';
import type { IconProps } from '@/App';

type ContextType = {
  icon: IconProps;
  setIcon: (icon: IconProps) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  svgElement: SVGSVGElement | null;
  setSvgElement: (svgElement: SVGSVGElement | null) => void;
};

// Export the context
export const IconContext = createContext<ContextType | undefined>(undefined);