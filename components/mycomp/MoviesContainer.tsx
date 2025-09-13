import { MovieType } from "@/types/movie";
import { MoviesCards } from "./MoviesCards";

type MoviesContainerProps = {
  movies: MovieType[];
  title: string;
};

export const MoviesContainer = ({ movies, title }: MoviesContainerProps) => {
  return (
    <div>
      <h3 className="font-semibold text-4xl">{title}</h3>
      <div className="flex gap-4 mt-5 flex-wrap">
        {movies.map((movie) => (
          <MoviesCards
            key={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            image={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};
