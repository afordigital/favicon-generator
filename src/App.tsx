import { createContext, type SVGProps } from 'react';
import { Canvas } from './components/middle-canvas/Canvas';
import { CanvasLayout } from './components/middle-canvas/CanvasLayout';
import { IconProvider } from './context/context';
import Layout from './layouts/Layout';
import { icons } from './lib/icons';

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
  id: crypto.randomUUID(),
  primaryBgColor: '#3c495d',
  secondaryBgColor: '#3c495d',
  radialGlare: false,
  bgColorType: 'RadialGradient',
  angle: 0,
  radius: 32,
  strokeWidth: 2,
  strokeColor: '#ffffff',
  noiseTexture: false,
  noiseOpacity: 0,
  iconName: 'Bike',
  iconSize: 400,
  color: '#ffffff',
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
  svgElement: null,
  setSvgElement: () => {},
});

export type BgColorType = 'LinearGradient' | 'RadialGradient' | 'Solid';
export interface IconProps extends SVGProps<SVGSVGElement> {
  id: string;
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
  return (
    <IconProvider>
      <Layout>
        <CanvasLayout>
          <Canvas />
        </CanvasLayout>
      </Layout>
    </IconProvider>
  );
}

export default App;
