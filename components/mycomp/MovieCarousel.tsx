"use client";
import * as React from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function MovieCarousel() {
  const images = ["gladiator.jpg", "venom.webp", "wicked.jpg"];

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <>
      <Carousel setApi={setApi} className="w-full max-h-[600px] ">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video max-h-[600px] items-center justify-center p-6">
                    <img
                      className="max-h-[600px] w-full object-cover"
                      src={img}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-13" />
        <CarouselNext className="right-13" />
      </Carousel>
      {Array.from({ length: count }).map((_, index) => (
        <div
          onClick={() => {
            api?.scrollTo(index);
          }}
          key={index}
          className={` rounded-full size-4  ${
            index + 1 === current ? "bg-white" : "bg-gray-600"
          }`}
        ></div>
      ))}
    </>
  );
}

// export function MovieCarousel() {
//   const images = ["bella.jpg", "venon.wepb", "moana.jpeg"];
