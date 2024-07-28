import { FC, memo } from "react";
import GameCard from "../2-molecules/GameCard";

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
  games: Game[];
}

const GameList: FC<Props> = ({ className, games }) => (
  <div className={`grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6${className ? " " + className : ""}`}>
    {games.map((game) => (
      <GameCard key={game.id} game={game} />
    ))}
  </div>
);

export default memo<Props>(GameList);
