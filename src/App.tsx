import { type SVGProps } from 'react';
import { Canvas } from './components/middle-canvas/Canvas';
import { CanvasLayout } from './components/middle-canvas/CanvasLayout';
import { IconProvider } from './context/context';
import Layout from './layouts/Layout';
import { IconName } from './lib/icons';
import { Toaster } from '@pheralb/toast';

export type BgColorType = 'LinearGradient' | 'RadialGradient' | 'Solid';
export interface IconProps extends SVGProps<SVGSVGElement> {
  id: string;
  primaryBgColor: string;
  secondaryBgColor: string;
  bgColorType: BgColorType;
  radialGlare: boolean;
  angle?: number;
  radius?: number;
  strokeWidth: number;
  strokeColor: string;
  noiseTexture: boolean;
  noiseOpacity?: number;
  iconName: IconName;
  color: string;
  iconSize?: number;
  xOffset?: number;
  yOffset?: number;
}

function App() {
  return (
    <IconProvider>
      <Toaster theme="dark" />
      <Layout>
        <CanvasLayout>
          <Canvas />
        </CanvasLayout>
      </Layout>
    </IconProvider>
  );
}

export default App;
