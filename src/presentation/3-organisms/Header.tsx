import { FC, memo } from "react";
import Logo from "../1-atoms/Icons/Logo";
import Url from "../1-atoms/Url";

interface Props {
  className?: string;
}

const Header: FC<Props> = ({ className }) => (
  <header className={`flex items-center justify-between bg-background px-4 py-2 shadow-sm md:px-6${className ? " " + className : ""}`}>
    <Url href="#" className="flex items-center gap-2 text-lg font-semibold">
      <Logo className="h-6 w-6" />
      <span className="sr-only">Game Library</span>
    </Url>
    <nav className="flex items-center gap-4">
      <Url href="#" className="text-sm font-medium hover:underline">
        Home
      </Url>
      <Url href="#" className="text-sm font-medium hover:underline">
        Games
      </Url>
      <Url href="#" className="text-sm font-medium hover:underline">
        About
      </Url>
      <Url href="#" className="text-sm font-medium hover:underline">
        Contact
      </Url>
    </nav>
  </header>
);

export default memo<Props>(Header);
