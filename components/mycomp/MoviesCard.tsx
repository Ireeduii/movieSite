import React from "react";
// import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/moviesCard";
type MovieCard = {
  title: string;
  rating: number;
  image: string;
};

const MovieCard = ({ title, rating, image }: MovieCard) => {
  return (
    <Card className="ml-2.5 w-[230px] bg-secondary p-0 overflow-hidden gap-2 cursor-pointer hover:bg-[#0000004D]">
      <CardContent className="p-0 ">
        <div className="bg-black">
          <img
            src={image}
            alt=""
            className="w-[230px] h-[340px] hover:opacity-80 transition-opacity "
          />
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-start p-2">
        <CardDescription className="flex gap-2">
          <p className="text-[14px] font-semibold text-black">
            ⭐ {rating}
            <span className="text-[12px] text-gray-500">/10</span>
          </p>
        </CardDescription>

        <CardTitle className="text-[18px] font-normal">{title}</CardTitle>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
