import { Logo } from './logo';
import { Navigation } from './navigation';
import { UserActions } from './user-actions';

export const Header = () => {
  return (
    <header className="h-16 border-b">
      <nav className="flex justify-between max-w-screen-xl mx-auto h-full items-center">
        <Logo />
        <Navigation />
        <UserActions />
      </nav>
    </header>
  );
};
