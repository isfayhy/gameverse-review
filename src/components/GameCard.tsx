import { Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface GameCardProps {
  id: string;
  title: string;
  coverImage: string;
  rating: number;
  year: number;
  developer: string;
}

export const GameCard = ({ id, title, coverImage, rating, year, developer }: GameCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link to={`/game/${id}`} className="game-card">
      <div className="aspect-[3/4] bg-card">
        <img
          src={coverImage}
          alt={title}
          className={`transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="game-card-overlay" />
        <div className="game-card-content">
          <div className="flex items-center gap-2 mb-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
          <h3 className="text-lg font-semibold leading-tight mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {year} • {developer}
          </p>
        </div>
      </div>
    </Link>
  );
};