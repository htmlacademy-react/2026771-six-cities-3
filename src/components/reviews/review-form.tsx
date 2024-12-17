import React, { useState } from 'react';

function ReviewForm(): JSX.Element {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState<number | null>(null);

  const handleTextChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setReviewText((event.target as HTMLTextAreaElement).value);
  };

  const handleRatingChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value);
    setRating(value);
  };

  const isTextValid = reviewText.length >= 50 && reviewText.length <= 300;
  const isFormValid = isTextValid && rating !== null;

  const ratingTitles: { [key: number]: string } = {
    5: 'perfect',
    4: 'good',
    3: 'not bad',
    2: 'badly',
    1: 'terribly',
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => (
          <React.Fragment key={star}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star}
              id={`${star}-stars`}
              type="radio"
              onChange={handleRatingChange}
            />
            <label
              htmlFor={`${star}-stars`}
              className="reviews__rating-label form__rating-label"
              title={ratingTitles[star]}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={reviewText}
        onChange={handleTextChange}
        placeholder="Tell how was your stay, what you like and what can be improved"
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set a{' '}
          <span className="reviews__star">rating</span> and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;


