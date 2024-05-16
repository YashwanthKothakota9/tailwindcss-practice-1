import { Filters } from '@/components/filters';
import { Results } from '@/components/Results';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Dot = ({ className }: any) => {
  return (
    <div className={cn('absolute space-y-2', className)}>
      <div className="bg-slate-500/50 p-1 rounded-xl text-white text-sm text-center">
        $300
      </div>
      <div className="bg-slate-500/50 h-12 w-12 rounded-full flex items-center p-4">
        <div className="w-full h-full bg-white rounded-full"></div>
      </div>
    </div>
  );
};

const SearchPage = () => {
  return (
    <div className="h-[calc(100%-64px)] grid grid-cols-5 p-6 max-w-screen-xl mx-auto gap-4">
      <div className="h-full col-span-3 space-y-4">
        <Filters />
        <Results />
      </div>
      <div className="bg-blue-500 h-full col-span-2 rounded-xl relative overflow-hidden">
        <Image
          src="/image.jpeg"
          alt="mountains"
          fill
          className="object-cover"
        />
        <Dot className="top-12 left-12" />
        <Dot className="bottom-12 right-12" />
      </div>
    </div>
  );
};

export default SearchPage;
