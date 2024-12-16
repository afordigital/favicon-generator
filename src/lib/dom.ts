export const downloadSvg = (svgElement: SVGSVGElement) => {
  const svg = svgElement.outerHTML;
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  a.download = "favicon.svg";
  a.click();
};
