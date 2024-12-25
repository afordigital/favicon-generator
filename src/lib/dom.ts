import { toPng } from 'html-to-image';

export const downloadSvg = (svgElement: SVGSVGElement) => {
  const svg = svgElement.outerHTML;
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'favicon.svg';
  a.click();
  // GC won't collect it otherwise
  URL.revokeObjectURL(url);
};

export const downloadAsPng = async (svgElement: SVGSVGElement) => {
  if (!svgElement) return;

  const image = await toPng(svgElement as unknown as HTMLElement);
  const link = document.createElement('a');
  link.href = image;
  link.download = 'icon.png';
  link.click();
};