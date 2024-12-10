import { createContext } from "react";
import "./App.css";
import Layout from "./layouts/Layout";
import { iconsMap } from "./lib/iconsMap";
import { Canvas } from "./components/middle-canvas/Canvas";
import { useHistoryState } from "@uidotdev/usehooks"; 

type ContextType = {
  icon: keyof typeof iconsMap;
  setIcon: (icon: keyof typeof iconsMap) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
};

export const IconContext = createContext<ContextType>({
  icon: "Bicycle",
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
  angle: string;
  radius: string;
  strokeWidth: string;
  strokeColor: string;
  noiseTexture: boolean;
  noiseOpacity: string;
  iconSize: string;
  iconColor: string;
  xOffset: string;
  yOffset: string;
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
  } = useHistoryState<keyof typeof iconsMap>("Bicycle");


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
