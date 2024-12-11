import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  onRate?: (rating: number) => void;
  readonly?: boolean;
}

export const StarRating = ({ rating, onRate, readonly = false }: StarRatingProps) => {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => !readonly && onRate?.(star)}
          disabled={readonly}
          className={`${star <= rating ? "active" : ""}`}
          type="button"
        >
          <Star className={`w-6 h-6 ${star <= rating ? "fill-primary" : ""}`} />
        </button>
      ))}
    </div>
  );
};