import MovieCard from "@/components/mycomp/movieCard";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex gap-6 flex-wrap mx-2 my-2 ">
        <MovieCard
          title="Solo Leveling: ReAwakening"
          rating={6.9}
          image="https://m.media-amazon.com/images/M/MV5BMDNjMzcxNTEtODRjYi00MGQ4LWE3YjAtNjllYzE1OThmZmRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        />
        <MovieCard
          title="How to train your dragon"
          rating={6.9}
          image="https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg"
        />
        <MovieCard title="Alien Romulus" rating={6.9} image="alien.png" />
        <MovieCard
          title="How to train your dragon"
          rating={6.9}
          image="ashes.png"
        />
        <MovieCard
          title="Space Dogg"
          rating={6.9}
          image="dogg.png
        "
        />
        <MovieCard
          title="The Order"
          rating={6.9}
          image="2-1.png
        "
        />
        <MovieCard
          title="Y2K"
          rating={6.9}
          image="2-2.png
        "
        />
        <MovieCard
          title="Solo Leveling: ReAwakening"
          rating={6.9}
          image="2-3.png
        "
        />
        <MovieCard
          title="Get Away"
          rating={6.9}
          image="2-4.png
        "
        />
        <MovieCard
          title="Sonic the Hedgehog 3"
          rating={6.9}
          image="2-5.png
        "
        />
      </div>
    </div>
  );
}
