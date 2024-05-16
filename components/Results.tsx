import { Button } from './ui/button';
import Image from 'next/image';
import { Heart, Star } from 'lucide-react';

const Item = ({ image, title, price }: any) => {
  return (
    <div className="p-3 bg-white rounded-md drop-shadow-lg flex gap-x-3">
      <Image
        src={image}
        alt="mountains"
        height={100}
        width={100}
        className="rounded-md object-fill aspect-square"
      />
      <div className="flex flex-col w-full">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <p className="text-xl">{title}</p>
            <Heart className="h-5 w-5" />
          </div>
          <div className="flex items-center gap-x-3">
            <div className="flex items-center text-sm">
              <Star className="h-4 w-4 mr-1 stroke-sky-500 fill-sky-400" />
              4.9&nbsp; <span className="text-muted-foreground">(75)</span>
            </div>
            <p className="text-sm">2.2 km</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-end">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-lg">{price}</p>
            <Button>Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Results = () => {
  return (
    <div className="bg-[#F4F6F9] rounded-xl p-6 space-y-4">
      <Item image="/image.jpeg" title="Gostone" price="$360" />
      <Item image="/image.jpeg" title="Gostone" price="$360" />
      <Item image="/image.jpeg" title="Gostone" price="$360" />
      <Item image="/image.jpeg" title="Gostone" price="$360" />
    </div>
  );
};
