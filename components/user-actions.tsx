import { Heart, Bell } from 'lucide-react';
import { NavButton } from './nav-button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export const UserActions = () => {
  return (
    <div className="flex gap-x-4">
      <NavButton icon={Heart} />
      <NavButton icon={Bell} />
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback className="bg-sky-500/50">YK</AvatarFallback>
      </Avatar>
    </div>
  );
};
