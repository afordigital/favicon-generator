import { createContext, useState } from "react";
import "./App.css";
import Layout from "./layouts/Layout";
import { iconsMap } from "./lib/iconsMap";
import { Canvas } from "./components/middle-canvas/Canvas";

type ContextType = {
  icon: keyof typeof iconsMap;
  setIcon: (icon: keyof typeof iconsMap) => void;
};

export const IconContext = createContext<ContextType>({
  icon: "Bicycle",
  setIcon: () => {},
});

import type { SVGProps } from "react";

export interface iconProps extends SVGProps<SVGSVGElement> {
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
  const [icon, setIcon] = useState<keyof typeof iconsMap>("Bicycle");

  const [iconProps, setIconProps] = useState<iconProps>();

  return (
    <IconContext.Provider value={{ icon, setIcon }}>
      <Layout>
        <Canvas />
      </Layout>
    </IconContext.Provider>
  );
}

export default App;
