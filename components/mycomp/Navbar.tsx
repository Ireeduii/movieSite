import { ModeToggle } from "../ui/Toggler-Theme";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { GenreDropDown } from "./GenreDropDown";

export const Navbar = () => {
  return (
    <header className="w-full">
      <div className="max-w-[1280px] flex justify-between m-auto items-center py-3">
        <div>
          <img src="Logo.png" className="h-5" />
        </div>
        <div className="flex gap-5">
          <GenreDropDown />
          <div className="flex items-center">
            <Search className="-mr-8" />
            <Input className="pl-10 w-[379px]" placeholder="Search..." />
          </div>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
