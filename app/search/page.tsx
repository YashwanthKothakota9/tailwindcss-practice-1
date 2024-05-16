import { Filters } from '@/components/filters';

const SearchPage = () => {
  return (
    <div className="h-[calc(100%-64px)] grid grid-cols-5 p-6 max-w-screen-xl mx-auto gap-4">
      <div className="h-full col-span-3 space-y-4">
        <Filters />
      </div>
      <div className="bg-blue-500 h-full col-span-2 rounded-xl"></div>
    </div>
  );
};

export default SearchPage;
