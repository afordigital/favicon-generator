import { ActionButtons } from "./ActionButtons";

export const CanvasLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full">
      <ActionButtons />
      <article className="flex items-center justify-center p-8 w-fit h-fit aspect-square bg-neutral-900">
        {children}
      </article>
    </section>
  );
};
