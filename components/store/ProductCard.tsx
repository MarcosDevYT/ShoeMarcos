import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

interface ProductCardProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
  };
}

export const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <div className="rounded-lg flex flex-col justify-between">
      <Carousel className="w-full mx-auto">
        <CarouselContent>
          {item.images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[330px]">
                <Image
                  src={item}
                  alt="Product Image"
                  fill
                  className="object-cover object-center w-full h-full rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>

      <div className="flex justify-between items-center mt-2">
        <h3 className="font-semibold text-xl">{item.name}</h3>
        <h5 className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/40">
          ${item.price}
        </h5>
      </div>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {item.description}
      </p>

      <Button asChild className="w-full mt-5">
        <Link href={`/product/${item.id}`}>See More!</Link>
      </Button>
    </div>
  );
};

export const LoadingProductCard = () => {
  return (
    <div className="flex flex-col">
      <Skeleton className="w-full h-[330px]" />
      <div className="flex flex-col mt-2 gap-y-2">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
      </div>
      <Skeleton className="w-full h-10 mt-5" />
    </div>
  );
};
