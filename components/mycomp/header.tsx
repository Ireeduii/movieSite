import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const HomeCarousel = () => {
  return (
    <Carousel>
      <div className="my-[-20]">
        <img
          className="w-[92px] h-[20px] mt-5  mb-8 ml-20"
          src="homelogo.png"
        />
        <div className="flex gap-2 ml-120 mt-[-65] mb-10">
          <button className="w-[97px] h-[36px] border rounded-md">
            ^ Genre
          </button>
          <input
            className="w-[397px] h-[36px] border rounded-md text-muted-foreground pr-60 pl-10"
            placeholder="Search..."
          ></input>
        </div>
      </div>

      <CarouselItem>
        <div className="absolute">
          <div className="relative">
            <h6 className="text-black text-[14px]">Now playing:</h6>
            <h1 className="text-white text-[36px]">Wicked</h1>
            <p className="text-[18px] text-white font-semibold">
              ⭐ 6.9<span className="text-[16px] text-[#71717A]">/10</span>
            </p>
            <p className="text-white text-[12px]">
              Elphaba, a misunderstood young woman because of her green skin,
              and Glinda, a popular girl, become friends at Shiz University in
              the Land of Oz. After an encounter with the Wonderful Wizard of
              Oz, their friendship reaches a crossroads.{" "}
            </p>
            <button className="py-2 px-4 bg-[#F4F4F5] rounded-md ">
              Watch Trailer
            </button>
            <img src="trailersvg.png" />
          </div>
          <img className="w-full" src="wicked.jpg" />
          {/* <img className="w-full" src="moana.jpeg" />
          <img className="w-full" src="gladiator.jpg" /> */}
        </div>
      </CarouselItem>

      <CarouselNext></CarouselNext>
    </Carousel>
  );
};
// {
//   /* <Carousel>
//   <CarouselContent>
//     <CarouselItem>...</CarouselItem>
//     <CarouselItem>...</CarouselItem>
//     <CarouselItem>...</CarouselItem>
//   </CarouselContent>
//   <CarouselPrevious />
//   <CarouselNext />
// </Carousel>; */
// }

// import React from "react";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export function ImageCarousel() {
//   const images = [
//     "/public/moana.jpeg",

//     "/public/wicked.jpg",

//     "/public/gladiator.jpg",
//   ];

//   return (
//     <Carousel className="w-full ">
//       <CarouselContent>
//         {images.map((src, index) => (
//           <CarouselItem key={index}>
//             <div className="flex items-center justify-center p-2">
//               <img src={src} className="w-full object-cover" />
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }
// export default ImageCarousel;
