import MovieCard from "./movieCard";

export const CardsSecond = () => {
  return (
    <div>
      <h3 className="font-semibold text-[24px] mt-15 ml-10">Popular </h3>
      <span className="ml-300 flex items-center gap-2 mt-[-25] mb-10 ">
        See more
        <img className="w-[10px] h-[10px]" src="icon1.png" />
      </span>
      <div className="flex justify-center items-center  gap-6 flex-wrap mx-2  mt-10">
        <MovieCard
          title="The Shawshank Redemption"
          rating={6.9}
          image="3.1.png"
        />

        <MovieCard
          title="The Godfather
        "
          rating={6.9}
          image="3.2.png"
        />

        <MovieCard
          title="The Dark Knight
"
          rating={6.9}
          image="3.3.png"
        />

        <MovieCard
          title="12 Angry Men
"
          rating={6.9}
          image="3.4.png"
        />

        <MovieCard
          title="The Lord of the Rings: The  Return of the King"
          rating={6.9}
          image="3.5.png"
        />
        <MovieCard
          title="Internstellar
"
          rating={6.9}
          image="4.1.png
        "
        />
        <MovieCard
          title="Se7en
"
          rating={6.9}
          image="4.2.png
        "
        />
        <MovieCard
          title="It’s a Wonderful life
"
          rating={6.9}
          image="4.3.png
        "
        />
        <MovieCard
          title="Seven samurai
"
          rating={6.9}
          image="4.4.png
        "
        />
        <MovieCard
          title="The Lord of the Rings: The Return of the King
"
          rating={6.9}
          image="4.5.png
        "
        />
      </div>
    </div>
  );
};
