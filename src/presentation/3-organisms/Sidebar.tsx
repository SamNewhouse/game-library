import { FC, memo } from "react";
import Button from "../1-atoms/Button";
import Separator from "../1-atoms/Separator";

interface Props {
  className?: string;
  activeFilter?: string;
  setActiveFilter: (filter: string) => void;
}

const Header: FC<Props> = ({ className, activeFilter, setActiveFilter }) => {
  
  return (<>
    <div className={`hidden w-64 flex-col border-r bg-background p-4 md:flex${className ? " " + className : ""}`}>
      <div className="mb-6 text-2xl font-bold">Game Library</div>
      <nav className="flex flex-col gap-2">
              
        <Button
          variant={activeFilter === "all" ? "secondary" : "ghost"}
          onClick={() => setActiveFilter("all")}
          className="justify-start"
        >
          All Games
        </Button>
        <Button
          variant={activeFilter === "favorites" ? "secondary" : "ghost"}
          onClick={() => setActiveFilter("favorites")}
          className="justify-start"
        >
          Favorites
        </Button>
        <Button
          variant={activeFilter === "recently-added" ? "secondary" : "ghost"}
          onClick={() => setActiveFilter("recently-added")}
          className="justify-start"
        >
          Recently Added
        </Button>
        <Separator />
        <Button
          variant={activeFilter === "action" ? "secondary" : "ghost"}
          onClick={() => setActiveFilter("action")}
          className="justify-start"
        >
          Action
        </Button>
        <Button
          variant={activeFilter === "adventure" ? "secondary" : "ghost"}
          onClick={() => setActiveFilter("adventure")}
          className="justify-start"
        >
          Adventure
        </Button>
        <Button
          variant={activeFilter === "rpg" ? "secondary" : "ghost"}
          onClick={() => setActiveFilter("rpg")}
          className="justify-start"
        >
          RPG
        </Button>
        <Button
          variant={activeFilter === "fps" ? "secondary" : "ghost"}
          onClick={() => setActiveFilter("fps")}
          className="justify-start"
        >
          FPS
        </Button>
        <Button
          variant={activeFilter === "racing" ? "secondary" : "ghost"}
          onClick={() => setActiveFilter("racing")}
          className="justify-start"
        >
          Racing
        </Button>
        <Button
          variant={activeFilter === "horror" ? "secondary" : "ghost"}
          onClick={() => setActiveFilter("horror")}
          className="justify-start"
        >
          Horror
        </Button>
      </nav>
    </div>
  </>
  );
};

export default memo<Props>(Header);
