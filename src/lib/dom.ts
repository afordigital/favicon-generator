export const downloadSvg = (svgElement: SVGSVGElement) => {
  const svg = svgElement.outerHTML;
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "favicon.svg";
  a.click();
  // GC won't collect it otherwise
  URL.revokeObjectURL(url);
};
