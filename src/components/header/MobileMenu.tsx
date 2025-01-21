import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

export const MobileMenu = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <section className="inline sm:hidden">
      <Button
        variant="outline"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Menu>MobileMenu</Menu>
      </Button>
    </section>
  );
};
