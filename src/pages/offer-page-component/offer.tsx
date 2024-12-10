import { useState } from 'react';
// import { useParams } from 'react-router-dom';
import Card from '../../components/card';
import Header from '../../components/header';
import Comment from '../../components/comment';
import { UserTypeData, CommentTypeData, CardTypeData, OfferTypeData,  } from '../../components/type';

type OfferProps = {
  userData: UserTypeData;
  offerData: OfferTypeData;
  commentData: CommentTypeData[];
  cardNeighbourhoodData: CardTypeData[];
};

const isFormValid = false;

function Offer({ userData, offerData, commentData, cardNeighbourhoodData }: OfferProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  // const { id } = useParams<{ id: string }>();

  const handleMouseEnter = (id: string) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  // const currentOffer = offerData.find((offer) => offer.id === id);

  // if (!currentOffer) {
  //   return <div>Offer not found</div>;
  // }

  const { title, description, type, price, images, goods, host, isPremium, rating, bedrooms, maxAdults } = offerData;
  return (
    <div className="page">
      <Header headerUserName={userData.userName} favoriteCount={userData.favoriteCount} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image, index) => (
                <div className="offer__image-wrapper" key={index}>
                  <img className="offer__image" src={image} alt={`Offer image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${(rating / 5) * 100}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating.toFixed(1)}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{type}</li>
                <li className="offer__feature offer__feature--bedrooms">{bedrooms} Bedrooms</li>
                <li className="offer__feature offer__feature--adults">Max {maxAdults} adults</li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What’s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((item, index) => (
                    <li className="offer__inside-item" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={`offer__avatar-wrapper ${
                      host.isPro ? 'offer__avatar-wrapper--pro' : ''
                    } user__avatar-wrapper`}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{host.name}</span>
                  {host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{commentData.length}</span>
                </h2>
                <ul className="reviews__list">
                  {commentData.map((comment) => (
                    <Comment
                      key={comment.id}
                      date={comment.date}
                      user={comment.user}
                      comment={comment.comment}
                      rating={comment.rating}
                    />
                  ))}
                </ul>
                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label" htmlFor="review">
                    Your review
                  </label>
                  <textarea
                    className="reviews__textarea form__textarea"
                    id="review"
                    name="review"
                    placeholder="Tell how was your stay, what you like and what can be improved"
                  />
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set a{' '}
                      <span className="reviews__star">rating</span> and describe your stay with at
                      least <b className="reviews__text-amount">50 characters</b>.
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
              </section>
            </div>
          </div>
          <section className="offer__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {cardNeighbourhoodData.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  type={card.type}
                  price={card.price}
                  previewImage={card.previewImage}
                  isPremium={card.isPremium}
                  rating={card.rating}
                  onMouseEnter={() => handleMouseEnter(card.id)}
                  onMouseLeave={handleMouseLeave}
                  isActive={activeCard === card.id}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
