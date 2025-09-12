import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const GENRES = [
  {
    name: "Action",
  },
  {
    name: "Adventure",
  },
  {
    name: "Sci-fi",
  },
  {
    name: "Horror",
  },
  {
    name: "Comedy",
  },
];

export function GenreDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="" align="start">
        <DropdownMenuLabel className="text-2xl font-bold">
          Genres
        </DropdownMenuLabel>
        <p className="px-2">See list of movies by genre </p>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:!bg-transparent ">
          {GENRES.map((genre) => (
            // <Link href="/genre">
            <Badge key={genre.name} variant="outline">
              {genre.name}

              <ChevronRight />
            </Badge>
            // </Link>
          ))}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
