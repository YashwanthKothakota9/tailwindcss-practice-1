import { Header } from '@/components/header';
import React from 'react';

type Props = {
  children: React.ReactNode;
};
const SearchPageLayout = ({ children }: Props) => {
  return (
    <div className="h-full">
      <Header />
      {children}
    </div>
  );
};

export default SearchPageLayout;
