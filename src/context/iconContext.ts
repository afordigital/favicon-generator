// iconContext.ts

import { createContext, Dispatch, SetStateAction } from 'react';
import type { IconProps } from '@/App';
import { Icons } from '@/lib/icons';

type ContextType = {
  icon: IconProps;
  setIcon: (icon: IconProps) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  svgElement: SVGSVGElement | null;
  setSvgElement: (svgElement: SVGSVGElement | null) => void;
  lastIcons: IconProps[];
  setLastIcons: Dispatch<SetStateAction<IconProps[]>>;
  importedIcons: Icons;
  setImportedIcons: Dispatch<SetStateAction<Icons>>;
};

// Export the context
export const IconContext = createContext<ContextType | undefined>(undefined);
