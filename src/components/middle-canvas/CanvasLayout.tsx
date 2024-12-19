import { useEffect, useState } from "react";
import { ActionButtons } from "./ActionButtons";

export const CanvasLayout = ({ children }: { children: React.ReactNode }) => {
  const [zoom, setZoom] = useState(1.0);
  useEffect(() => {
    document.addEventListener('wheel', function(event) {
      if (event.ctrlKey) {
        event.preventDefault();
        const delta = event.deltaY;
        if (delta < 0) {
          setZoom(zoom => zoom - 0.01)
        } else {
          setZoom(zoom => zoom + 0.01)
        }
      }
    }, { passive: false });
  }, [])
  return (
    <section className="flex flex-col items-center justify-center w-full h-full">
      <ActionButtons />
      <article
        style={{
          '--zoom': zoom,
        }}
        className={`flex items-center justify-center p-8 w-fit h-fit aspect-square bg-neutral-900 zoom duration-300`}
      >
        {children}
      </article>
    </section>
  );
};
