import { createContext, useState } from "react";
import Layout from "./layouts/Layout";
import { icons } from "./lib/icons";
import { Canvas } from "./components/middle-canvas/Canvas";
import { useHistoryState } from "@uidotdev/usehooks";

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

const DEFAULT_ICON: IconProps = {
  primaryBgColor: "#3c495d",
  secondaryBgColor: "#3c495d",
  radialGlare: false,
  bgColorType: "RadialGradient",
  angle: 0,
  radius: 32,
  strokeWidth: 2,
  strokeColor: "#ffffff",
  noiseTexture: false,
  noiseOpacity: 0,
  iconName: "Bike",
  iconSize: undefined,
  color: '#ffffff',
  xOffset: 0,
  yOffset: 0,
};

export const IconContext = createContext<ContextType>({
  icon: DEFAULT_ICON,
  setIcon: () => { },
  undo: () => { },
  redo: () => { },
  canUndo: false,
  canRedo: false,
  svgElement: null,
  setSvgElement: () => { },
});

import type { SVGProps } from "react";
import { CanvasLayout } from "./components/middle-canvas/CanvasLayout";

export type BgColorType = "Solid" | "LinearGradient" | "RadialGradient";
export interface IconProps extends SVGProps<SVGSVGElement> {
  primaryBgColor: string;
  secondaryBgColor: string;
  bgColorType: BgColorType;
  radialGlare: boolean;
  angle: number;
  radius: number;
  strokeWidth: number;
  strokeColor: string;
  noiseTexture: boolean;
  noiseOpacity: number;
  iconName: keyof typeof icons;
  color: string;
  iconSize?: number;
  xOffset?: number;
  yOffset?: number;
}

function App() {
  const [svgElement, setSvgElement] = useState<SVGSVGElement | null>(null);

  // Manejo del estado de icono con historial
  const {
    state: icon,
    set: setIcon,
    undo: undoIcon,
    redo: redoIcon,
    canUndo,
    canRedo,
  } = useHistoryState<IconProps>(DEFAULT_ICON);

  const undo = () => {
    undoIcon();
  };

  const redo = () => {
    redoIcon();
  };

  return (
    <IconContext.Provider
      value={{
        icon,
        setIcon,
        undo,
        redo,
        canUndo,
        canRedo,
        svgElement,
        setSvgElement,
      }}
    >
      <Layout>
        <CanvasLayout>
          <Canvas />
        </CanvasLayout>
      </Layout>
    </IconContext.Provider>
  );
}

export default App;
