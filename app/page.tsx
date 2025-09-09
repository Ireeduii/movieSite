// import MovieCard from "@/components/mycomp/movieCard";
// import { ModeToggle } from "@/components/ui/toggler";
import {
  CardsFirst,
  Header,
  CardsSecond,
  CardsThird,
  Toggler,
  Footer,
} from "@/components/mycomp";

export default function Home() {
  return (
    <div>
      <Toggler></Toggler>
      <Header></Header>
      <CardsFirst></CardsFirst>
      <CardsSecond></CardsSecond>
      <CardsThird></CardsThird>
      <Footer></Footer>
    </div>
  );
}
