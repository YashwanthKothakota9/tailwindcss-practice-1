import { ShoppingBag, Info, Settings, Map } from 'lucide-react';
import { NavButton } from './nav-button';

export const Navigation = () => {
  return (
    <div className="flex gap-x-4">
      <NavButton icon={Map} active />
      <NavButton icon={ShoppingBag} />
      <NavButton icon={Info} />
      <NavButton icon={Settings} />
    </div>
  );
};
