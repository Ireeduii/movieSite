import { Navbar } from "@/components/mycomp/Navbar";
import { MovieCarousel } from "@/components/mycomp/MovieCarousel";
import { MoviesCards } from "@/components/mycomp/MoviesCards";
type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};
type movieResponseType = {
  page: number;
  total: number;
  results: MovieType[];
};

export default async function Home() {
  const getUpComingMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
        },
      }
    );

    const data = await res.json();
    return data;
  };

  const upcomingMovies: movieResponseType = await getUpComingMovies();

  console.log("hello");
  return (
    <div>
      <Navbar />
      <MovieCarousel />
      {upcomingMovies.results?.map((movie) => (
        <MoviesCards
          key={movie.id}
          title={movie.title}
          rating={movie.vote_average}
          image={movie.poster_path}
        />
      ))}
    </div>
  );
}
