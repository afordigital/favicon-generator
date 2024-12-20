import { useEffect, useState } from 'react';
import { CollapsibleComponent } from './Collapsible';
import { Icon } from '@/lib/icons';

export const LastIconsSaved = () => {
  const [lastIcons, setLastIcons] = useState<Icon[]>([]);

  useEffect(() => {
    const savedIcons = localStorage.getItem('lastIcons');
    if (savedIcons) {
      setLastIcons(JSON.parse(savedIcons));
    }
  }, []);

  return (
    <CollapsibleComponent title="Last Icons">
      <section>
        {lastIcons.map(() => (
          <></>
        ))}
      </section>
    </CollapsibleComponent>
  );
};
