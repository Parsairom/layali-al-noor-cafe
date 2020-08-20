import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function RatingStars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={cn("flex items-center gap-1", className)} aria-label={`${rating} / 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={15}
          className={index < rating ? "fill-gold text-gold" : "fill-transparent text-espresso-light"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
