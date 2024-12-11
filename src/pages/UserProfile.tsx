import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GameCard } from "@/components/GameCard";
import { Card, CardContent } from "@/components/ui/card";

// Données statiques pour la démo
const MOCK_USER = {
  username: "GameMaster",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=GameMaster",
  joinDate: "2024",
  gamesReviewed: 42,
  bio: "Passionné de jeux vidéo depuis toujours",
};

const MOCK_REVIEWED_GAMES = [
  {
    id: "1",
    title: "The Legend of Zelda: Breath of the Wild",
    coverImage: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.jpg",
    rating: 5,
    year: 2017,
    developer: "Nintendo",
  },
  {
    id: "2",
    title: "Red Dead Redemption 2",
    coverImage: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.jpg",
    rating: 4,
    year: 2018,
    developer: "Rockstar Games",
  },
];

const UserProfile = () => {
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        {/* En-tête du profil */}
        <div className="flex items-center gap-6 mb-8">
          <Avatar className="h-24 w-24">
            <AvatarImage src={MOCK_USER.avatarUrl} alt={MOCK_USER.username} />
            <AvatarFallback>{MOCK_USER.username[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{MOCK_USER.username}</h1>
            <p className="text-muted-foreground mb-2">{MOCK_USER.bio}</p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>Membre depuis {MOCK_USER.joinDate}</span>
              <span>•</span>
              <span>{MOCK_USER.gamesReviewed} jeux notés</span>
            </div>
          </div>
        </div>

        {/* Section des jeux notés */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Jeux notés récemment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_REVIEWED_GAMES.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;