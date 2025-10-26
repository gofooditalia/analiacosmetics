import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Review {
  id: string
  author: string
  rating: number
  comment: string
  date: string
  verified: boolean
}

interface ProductReviewsProps {
  reviews: Review[]
  averageRating: number
  totalReviews: number
}

export function ProductReviews({ reviews, averageRating, totalReviews }: ProductReviewsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < Math.floor(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-lg font-semibold">{averageRating.toFixed(1)}</span>
        <span className="text-gray-600">({totalReviews} reviews)</span>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4 last:border-b-0">
            <div className="flex items-start gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={`/user-.png?height=40&width=40&query=user-${review.author}`} />
                <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{review.author}</span>
                  {review.verified && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verified Purchase</span>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{review.date}</span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
