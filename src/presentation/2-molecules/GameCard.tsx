import { FC, memo } from "react";
import Button from "../1-atoms/Button";
import Component from "../1-atoms/Icons/Component";
import Heart from "../1-atoms/Icons/Heart";
import Star from "../1-atoms/Icons/Star";
import Separator from "../1-atoms/Separator";
import Url from "../1-atoms/Url";

interface Game {
  id: number;
  title: string;
  cover: string;
  rating: number;
  genre: string[];
  isFavorite: boolean;
  platforms: string[];
}

interface Props {
  className?: string;
  game: Game;
}

const GameCard: FC<Props> = ({ className, game }) => (
  <div className={`relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md${className ? " " + className : ""}`}>
    <Url href="#" className="flex flex-col h-full w-full">
      <img src={game.cover} alt={game.title} className="h-52 w-full aspect-video object-cover" />
      <div className="flex flex-col w-full p-4">
        <h3 className="text-lg font-semibold">
          {game.title}
        </h3>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1 text-primary">
            <Star className="h-4 w-4" />
            <span>{game.rating.toFixed(1)}</span>
          </div>
          <Separator orientation="vertical" className="h-4" />
          {game.genre.map((g, i) => (
            <span key={i} className="text-muted-foreground">
              {g}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          {game.platforms.map((platform, index) => (
            <div key={index} className="bg-muted rounded-full w-6 h-6 flex items-center justify-center">
              <Component className="w-4 h-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </Url>
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-2 right-2 rounded-full bg-background/80 p-1 text-muted-foreground hover:bg-background hover:text-foreground"
    >
      <Heart className="h-4 w-4" />
    </Button>
  </div>
);

export default memo<Props>(GameCard);
