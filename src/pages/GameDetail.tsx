import { StarRating } from "@/components/StarRating";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SAMPLE_GAME = {
  id: "1",
  title: "The Legend of Zelda: Breath of the Wild",
  coverImage: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.jpg",
  rating: 4.8,
  year: 2017,
  developer: "Nintendo",
  description: "Step into a world of adventure in The Legend of Zelda: Breath of the Wild. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure.",
  reviews: [
    {
      id: "1",
      user: "Alex",
      rating: 5,
      comment: "A masterpiece that redefines open-world gaming.",
      date: "2023-12-25",
    },
    {
      id: "2",
      user: "Sarah",
      rating: 4,
      comment: "Incredible freedom of exploration, though weapon durability can be frustrating.",
      date: "2023-12-20",
    },
  ],
};

const GameDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [userRating, setUserRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userRating) {
      toast({
        title: "Please add a rating",
        description: "You need to rate the game before submitting your review.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Review submitted",
      description: "Thank you for sharing your thoughts!",
    });
    
    setUserRating(0);
    setComment("");
  };

  return (
    <div className="container py-8 page-transition">
      <div className="max-w-4xl mx-auto">
        <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
          <img
            src={SAMPLE_GAME.coverImage}
            alt={SAMPLE_GAME.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">{SAMPLE_GAME.title}</h1>
            <div className="flex items-center gap-2">
              <StarRating rating={SAMPLE_GAME.rating} readonly />
              <span className="text-lg font-medium">{SAMPLE_GAME.rating.toFixed(1)}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <span>{SAMPLE_GAME.year}</span>
            <span>•</span>
            <span>{SAMPLE_GAME.developer}</span>
          </div>

          <p className="text-lg leading-relaxed">{SAMPLE_GAME.description}</p>

          <div className="border-t border-border pt-8">
            <h2 className="text-2xl font-semibold mb-6">Reviews</h2>
            
            <form onSubmit={handleSubmitReview} className="space-y-4 mb-8">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Rating</label>
                <StarRating rating={userRating} onRate={setUserRating} />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="comment" className="text-sm font-medium">Your Review</label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full min-h-[100px] rounded-lg bg-secondary p-3 text-foreground"
                  placeholder="Share your thoughts about this game..."
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Submit Review
              </button>
            </form>

            <div className="space-y-6">
              {SAMPLE_GAME.reviews.map((review) => (
                <div key={review.id} className="bg-secondary rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{review.user}</span>
                    <StarRating rating={review.rating} readonly />
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                  <time className="text-sm text-muted-foreground">{review.date}</time>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;