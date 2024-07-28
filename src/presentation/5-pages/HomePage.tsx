import { NextPage } from "next";
import { ChangeEvent, useMemo, useState } from "react";
import Button from "../1-atoms/Button";
import LayoutGrid from "../1-atoms/Icons/LayoutGrid";
import Input from "../1-atoms/Input";
import GameList from "../3-organisms/GameList";
import BaseLayout from "../4-layouts/BaseLayout";

interface Props {
  //
}

const HomePage: NextPage<Props> = () => {

  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [games, setGames] = useState([
    {
      id: 1,
      title: "The Witcher 3: Wild Hunt",
      cover: "https://images.unsplash.com/photo-1622643048696-883eafe4d8dc?q=100&w=400",
      rating: 4.8,
      genre: ["Action", "RPG"],
      isFavorite: true,
      platforms: ["steam"],
    },
    {
      id: 2,
      title: "Elden Ring",
      cover: "https://images.unsplash.com/photo-1517348663636-31103cb49587?q=100&w=400",
      rating: 4.9,
      genre: ["Action", "Adventure"],
      isFavorite: false,
      platforms: ["steam", "ubisoft"],
    },
    {
      id: 3,
      title: "Horizon Zero Dawn",
      cover: "https://images.unsplash.com/photo-1544489904-378f847d9f2c?q=100&w=400",
      rating: 4.7,
      genre: ["Action", "Adventure"],
      isFavorite: true,
      platforms: ["steam"],
    },
    {
      id: 4,
      title: "God of War",
      cover: "https://images.unsplash.com/photo-1525711857929-4272fb4a040f?q=100&w=400",
      rating: 4.8,
      genre: ["Action", "Adventure"],
      isFavorite: false,
      platforms: ["Ubisoft"],
    },
    {
      id: 5,
      title: "Fortnite",
      cover: "https://images.unsplash.com/photo-1589241062272-c0a000072dfa?q=100&w=400",
      rating: 3.4,
      genre: ["Action", "FPS"],
      isFavorite: true,
      platforms: ["ubisoft"],
    },
    {
      id: 6,
      title: "Spider-Man: Miles Morales",
      cover: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=100&w=400",
      rating: 4.8,
      genre: ["Action", "Adventure"],
      isFavorite: false,
      platforms: ["steam"],
    },
    {
      id: 7,
      title: "Halo Infinite",
      cover: "https://images.unsplash.com/photo-1620815023653-f65690227267?q=100&w=400",
      rating: 4.6,
      genre: ["Action", "FPS"],
      isFavorite: true,
      platforms: ["steam"],
    },
    {
      id: 8,
      title: "Forza Horizon 5",
      cover: "https://images.unsplash.com/photo-1716687503763-4a685603d3c5?q=100&w=400",
      rating: 4.9,
      genre: ["Racing"],
      isFavorite: false,
      platforms: ["steam"],
    },
    {
      id: 9,
      title: "Cyberpunk 2077",
      cover: "https://images.unsplash.com/photo-1533972751724-9135a8410a4c?q=100&w=400",
      rating: 4.2,
      genre: ["Action", "RPG"],
      isFavorite: true,
      platforms: ["steam"],
    },
    {
      id: 10,
      title: "Assassin's Creed Valhalla",
      cover: "https://images.unsplash.com/photo-1550346949-d1add938cba0?q=100&w=400",
      rating: 4.6,
      genre: ["Action", "Adventure"],
      isFavorite: false,
      platforms: ["Ubisoft"],
    },
    {
      id: 11,
      title: "Red Dead Redemption 2",
      cover: "https://images.unsplash.com/photo-1465779266399-be2743c3f4a5?q=100&w=400",
      rating: 4.8,
      genre: ["Action", "Adventure"],
      isFavorite: true,
      platforms: ["steam"],
    },
    {
      id: 12,
      title: "Death Stranding",
      cover: "https://images.unsplash.com/photo-1689470812905-a00529595259?q=100&w=400",
      rating: 4.5,
      genre: ["Action", "Adventure"],
      isFavorite: false,
      platforms: ["steam"],
    },
    {
      id: 13,
      title: "Sekiro: Shadows Die Twice",
      cover: "https://images.unsplash.com/photo-1668261200632-1d781ab9e0c4?q=100&w=400",
      rating: 4.7,
      genre: ["Action", "Adventure"],
      isFavorite: true,
      platforms: ["steam"],
    },
    {
      id: 14,
      title: "Doom Eternal",
      cover: "https://images.unsplash.com/photo-1602126694264-e37e296580db?q=100&w=400",
      rating: 4.6,
      genre: ["FPS", "Action"],
      isFavorite: false,
      platforms: ["steam"],
    },
    {
      id: 15,
      title: "Control",
      cover: "https://images.unsplash.com/photo-1576082712384-e05c1d86a6d6?q=100&w=400",
      rating: 4.7,
      genre: ["Action", "Adventure"],
      isFavorite: true,
      platforms: ["steam", "ubisoft"],
    },
    {
      id: 16,
      title: "Resident Evil Village",
      cover: "https://images.unsplash.com/photo-1718227324856-39b31ea5127e?q=100&w=400",
      rating: 4.8,
      genre: ["Action", "Horror"],
      isFavorite: false,
      platforms: ["steam"],
    },
  ])
  const [currentPage, setCurrentPage] = useState(1)
  const [gamesPerPage, setGamesPerPage] = useState(18)
  const filteredGames = useMemo(() => {
    let filtered = games
    if (searchQuery) {
      filtered = games.filter((game) => game.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    switch (activeFilter) {
      case "all":
        return filtered
      case "favorites":
        return filtered.filter((game) => game.isFavorite)
      case "recently-added":
        return filtered.slice(0, 6)
      case "action":
        return filtered.filter((game) => game.genre.includes("Action"))
      case "adventure":
        return filtered.filter((game) => game.genre.includes("Adventure"))
      case "rpg":
        return filtered.filter((game) => game.genre.includes("RPG"))
      case "fps":
        return filtered.filter((game) => game.genre.includes("FPS"))
      case "racing":
        return filtered.filter((game) => game.genre.includes("Racing"))
      case "horror":
        return filtered.filter((game) => game.genre.includes("Horror"))
      default:
        return filtered
    }
  }, [activeFilter, games, searchQuery])
  const indexOfLastGame = currentPage * gamesPerPage
  const indexOfFirstGame = indexOfLastGame - gamesPerPage
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame)
  const totalPages = Math.ceil(filteredGames.length / gamesPerPage)
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  return (
    <>
      <BaseLayout className="home" activeFilter={activeFilter} setActiveFilter={setActiveFilter}>
        <div className="mb-6 flex items-center justify-between">
          <div className="text-2xl font-bold">All Games</div>
            <Button variant="outline" size="sm" className="h-8 gap-1 text-sm">
              <LayoutGrid className="h-6 w-6" />
            </Button>
            <div className="flex items-center gap-4">
              <Input
                type="search"
                placeholder="Search games..."
                value={searchQuery}
                onChange={handleSearch}
                className="h-9 w-full max-w-sm"
              />
            </div>
          </div>
          <GameList games={currentGames} />
      </BaseLayout>
    </>
  );
};

export default HomePage;
