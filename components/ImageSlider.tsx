"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageSliderProps {
  images: string[];
}

export const ImageSlider = ({ images }: ImageSliderProps) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handlePreviousClick = () => {
    setMainImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setMainImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageClick = (index: number) => {
    setMainImageIndex(index);
  };

  return (
    <article className="grid gap-6 md:gap-3 items-start">
      <figure className="w-full relative overflow-hidden rounded-lg">
        <Image
          src={images[mainImageIndex]}
          alt="Product Image"
          width={600}
          height={600}
          className="object-cover object-center w-full h-[400px] lg:h-[500px] xl:h-[600px]"
        />

        <div className="absolute w-full inset-0 flex items-center justify-between px-4">
          <Button
            className="rounded-full"
            onClick={handlePreviousClick}
            size={"icon"}
            variant={"outline"}
          >
            <ChevronLeft className="size-6" />
          </Button>
          <Button
            className="rounded-full"
            onClick={handleNextClick}
            size={"icon"}
            variant={"outline"}
          >
            <ChevronRight className="size-6" />
          </Button>
        </div>
      </figure>

      <div className="flex gap-4">
        {images.map((image, index) => (
          <div
            className={cn(
              index === mainImageIndex ? "border-primary" : "border-gray-200",
              "border-2 relative overflow-hidden rounded-lg cursor-pointer"
            )}
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <div
              className={cn(
                index === mainImageIndex
                  ? "bg-transparent"
                  : "bg-black/30 hover:bg-transparent",
                "absolute w-full h-full top-0 left-0 transition-all duration-150"
              )}
            />
            <Image
              src={image}
              alt="Product Image"
              width={100}
              height={100}
              className="object-cover object-center w-[100px] h-[100px]"
            />
          </div>
        ))}
      </div>
    </article>
  );
};
