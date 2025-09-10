import MovieCard from "./movieCard";

export const CardsThird = () => {
  return (
    <div>
      <h3 className="font-semibold text-[24px] mt-15 ml-10"> Top Rated </h3>
      <span className="ml-300 flex items-center gap-2 mt-[-25] mb-10 ">
        See more
        <img className="w-[10px] h-[10px]" src="icon1.png" />
      </span>
      <div className="flex  justify-center items-center  gap-6 flex-wrap mx-2  mt-10">
        <MovieCard
          title="The Shawshank Redemption"
          rating={6.9}
          image="5.1.png"
        />

        <MovieCard
          title="The Godfather
        "
          rating={6.9}
          image="5.2.png"
        />

        <MovieCard
          title="The Dark Knight
"
          rating={6.9}
          image="5.3.png"
        />

        <MovieCard
          title="12 Angry Men
"
          rating={6.9}
          image="5.4.png"
        />

        <MovieCard
          title="The Lord of the Rings: The  Return of the King"
          rating={6.9}
          image="5.5.png"
        />
        <MovieCard
          title="Saving Private Ryan

"
          rating={6.9}
          image="6.1.png
        "
        />
        <MovieCard
          title="City of God

"
          rating={6.9}
          image="6.2.png
        "
        />
        <MovieCard
          title="The Green Mile

"
          rating={6.9}
          image="6.3.png
        "
        />
        <MovieCard
          title="Life is Beautiful

"
          rating={6.9}
          image="6.4.png
        "
        />
        <MovieCard
          title="Terminator 2: Judgement Day
"
          rating={6.9}
          image="6.5.png
        "
        />
      </div>
    </div>
  );
};
