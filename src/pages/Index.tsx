import { GameCard } from "@/components/GameCard";

const SAMPLE_GAMES = [
  {
    id: "1",
    title: "The Legend of Zelda: Breath of the Wild",
    coverImage: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.jpg",
    rating: 4.8,
    year: 2017,
    developer: "Nintendo",
  },
  {
    id: "2",
    title: "Red Dead Redemption 2",
    coverImage: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.jpg",
    rating: 4.9,
    year: 2018,
    developer: "Rockstar Games",
  },
  {
    id: "3",
    title: "God of War",
    coverImage: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg",
    rating: 4.7,
    year: 2018,
    developer: "Santa Monica Studio",
  },
  // Add more sample games as needed
];

const Index = () => {
  return (
    <div className="container py-8 page-transition">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Discover Games</h1>
        <p className="text-muted-foreground text-lg">Rate and review your favorite games</p>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {SAMPLE_GAMES.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </div>
  );
};

export default Index;