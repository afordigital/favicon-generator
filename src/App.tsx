import { createContext } from "react";
import "./App.css";
import Layout from "./layouts/Layout";
import { iconsMap } from "./lib/iconsMap";
import { Canvas } from "./components/middle-canvas/Canvas";
import { useHistoryState } from "@uidotdev/usehooks";

type ContextType = {
  icon: IconProps;
  setIcon: (icon: IconProps) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
};

const DEFAULT_ICON: IconProps = {
  bgColor: "#3c495d",
  bgColorType: "Solid",
  angle: 0,
  radius: 32,
  strokeWidth: 2,
  strokeColor: "#ffffff",
  noiseTexture: false,
  noiseOpacity: 0,
  iconName: "Bicycle",
  iconSize: 200,
  iconColor: "#ffffff",
  xOffset: 0,
  yOffset: 0,
};

export const IconContext = createContext<ContextType>({
  icon: DEFAULT_ICON,
  setIcon: () => {},
  undo: () => {},
  redo: () => {},
  canUndo: false,
  canRedo: false,
});

import type { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  bgColor: string;
  bgColorType: "Solid" | "LinearGradient" | "RadialGradient";
  angle: number;
  radius: number;
  strokeWidth: number;
  strokeColor: string;
  noiseTexture: boolean;
  noiseOpacity: number;
  iconName: keyof typeof iconsMap;
  iconSize: number;
  iconColor: string;
  xOffset: number;
  yOffset: number;
}

function App() {
  // Manejo del estado de icono con historial
  const {
    state: icon,
    set: setIcon,
    undo: undoIcon,
    redo: redoIcon,
    canUndo,
    canRedo,
  } = useHistoryState<IconProps>(DEFAULT_ICON);

  // Manejo del estado de propiedades del ícono con historial
  const {
    state: iconProps,
    set: setIconProps,
    undo: undoIconProps,
    redo: redoIconProps,
    canUndo: canUndoProps,
    canRedo: canRedoProps,
  } = useHistoryState<IconProps | undefined>(undefined);

  const undo = () => {
    undoIcon();
    undoIconProps();
  };

  const redo = () => {
    redoIcon();
    redoIconProps();
  };

  return (
    <IconContext.Provider
      value={{
        icon,
        setIcon,
        undo,
        redo,
        canUndo: canUndo || canUndoProps,
        canRedo: canRedo || canRedoProps,
      }}
    >
      <Layout>
        <Canvas />
      </Layout>
    </IconContext.Provider>
  );
}

export default App;
