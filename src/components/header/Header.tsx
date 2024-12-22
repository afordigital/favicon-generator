import { ActionButtons } from '../middle-canvas/ActionButtons';
import { DownloadButtons } from './DownloadButtons';

export const Header = () => {
  return (
    <section className="bg-[#18181B] border-1 border-b border-zinc-800 text-white w-screen flex justify-between p-6">
      <p>Mykonos</p>
      <ActionButtons />
      <DownloadButtons />
    </section>
  );
};
