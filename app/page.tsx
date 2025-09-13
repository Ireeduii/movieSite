import { Navbar } from "@/components/mycomp/Navbar";
import { MovieCarousel } from "@/components/mycomp/MovieCarousel";

import { MoviesContainer } from "@/components/mycomp";

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

        // next: { revalidate: 3600 },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch movies");

    const data: MovieResponseType = await res.json();
    return data;
  };

  const upcomingMovies = await getUpComingMovies();
  console.log(upcomingMovies);

  return (
    <div>
      <Navbar />
      <MovieCarousel />
      <MoviesContainer movies={upcomingMovies.results} title="Upcoming" />
      <MoviesContainer movies={upcomingMovies.results} title="Upcoming" />
      <MoviesContainer movies={upcomingMovies.results} title="Upcoming" />
    </div>
  );
}
