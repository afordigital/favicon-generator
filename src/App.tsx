import type { SVGProps } from 'react';
import { Canvas } from './components/middle-canvas/Canvas';
import { CanvasLayout } from './components/middle-canvas/CanvasLayout';
import { IconProvider } from './context/context';
import Layout from './layouts/Layout';
import { icons } from './lib/icons';

export type BgColorType = 'LinearGradient' | 'RadialGradient' | 'Solid';
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
