import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getHeroData } from "@/lib/getData";
import Image from "next/image";

export const HeroSection = async () => {
  const data = await getHeroData();

  return (
    <Carousel>
      <CarouselContent>
        {data.map((item) => (
          <CarouselItem key={item.id}>
            <div className="relative h-[45vh] lg:h-[60vh]">
              <Image
                src={item.imageString}
                alt="Banner Image"
                fill
                className="object-cover w-full h-full rounded-xl"
              />

              <div className="absolute top-6 left-6 bg-primary/85 text-white rounded-xl shadow-lg p-6 py-4 transition-transform hover:scale-105">
                <h2 className="text-2xl lg:text-4xl font-bold">{item.title}</h2>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="ml-16" />
      <CarouselNext className="mr-16" />
    </Carousel>
  );
};
