import React from "react";
import { Review } from "../../types/review";
import ReviewItem from "../review/review";

type ReviewListProps = {
  reviews: Review[];
};

function ReviewList({ reviews }: ReviewListProps): React.ReactElement {
  return (
    <section className="reviews">
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
    </section>
  );
}

export default ReviewList;
