import React, { useState, useEffect } from "react";

type Review = {
  rating: number;
  comment: string;
};

function ReviewForm(): React.ReactElement {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [reviews, setReviews] = useState<Review[]>(() => {
    const savedReviews = localStorage.getItem("reviews");
    return savedReviews ? JSON.parse(savedReviews) : [];
  });

  const isFormValid = comment.length >= 50 && comment.length <= 300 && rating > 0;

  // Сохраняем весь список отзывов в localStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isFormValid) {
      const newReview: Review = { rating, comment };

      setReviews([...reviews, newReview]); // Добавляем новый отзыв в список
      setRating(0);
      setComment("");
    }
  };

  return (
    <div>
      <form className="reviews__form form" onSubmit={handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>
        <div className="reviews__rating-form form__rating">
          {[5, 4, 3, 2, 1].map((star) => (
            <React.Fragment key={star}>
              <input
                className="form__rating-input"
                name="rating"
                value={star}
                id={`star-${star}`}
                type="radio"
                checked={rating === star}
                onChange={() => setRating(star)}
              />
              <label htmlFor={`star-${star}`} className="reviews__rating-label form__rating-label" title={`${star} stars`}>
                <svg className="form__star-image" width="37" height="33">
                  <use href="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ))}
        </div>

        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least{" "}
            <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid}>
            Submit
          </button>
        </div>
      </form>

      {/* Показываем список сохранённых отзывов */}
      <div className="reviews__list">
        <h3>Previous Reviews:</h3>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                ⭐ {review.rating} - {review.comment}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default ReviewForm;
