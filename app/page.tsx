// import MovieCard from "@/components/mycomp/movieCard";
// import { ModeToggle } from "@/components/ui/toggler";
import {
  CardsFirst,
  HomeCarousel,
  CardsSecond,
  CardsThird,
  Toggler,
  Footer,
} from "@/components/mycomp";

export default function Home() {
  return (
    <div className=" justify-center items-center">
      <Toggler></Toggler>
      <HomeCarousel></HomeCarousel>
      <CardsFirst></CardsFirst>
      <CardsSecond></CardsSecond>
      <CardsThird></CardsThird>
      <Footer></Footer>
    </div>
  );
}
