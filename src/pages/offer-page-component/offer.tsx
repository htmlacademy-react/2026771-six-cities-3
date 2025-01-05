import { useState } from 'react';
import Card from '../../components/card';
import Header from '../../components/header';
import { Reviews } from '../../components/review';
import { UserTypeData, CommentTypeData, CardTypeData, OfferTypeData } from '../../components/type';
import { Map } from '../../components/map';

type OfferProps = {
  userData: UserTypeData;
  offerData: OfferTypeData;
  commentData: CommentTypeData[];
  cardNeighbourhoodData: CardTypeData[];
};

function Offer({ userData, offerData, commentData, cardNeighbourhoodData }: OfferProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<string | null>(null);


  const { title, description, type, price, images, goods, host, isPremium, rating, bedrooms, maxAdults } = offerData;
  return (
    <div className="page">
      <Header headerUserName={userData.userName} favoriteCount={userData.favoriteCount} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt={'Offer image'} />
                </div>
              ))};
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
                  {goods.map((item) => (
                    <li className="offer__inside-item" key={item}>
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
                <Reviews commentData={commentData} />
              </section>
            </div>
          </div>
          <Map
            location={cardNeighbourhoodData[0].city.location}
            offers={cardNeighbourhoodData}
            activeOfferId={activeCard}
            className="offer__map map"
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {cardNeighbourhoodData.map((card) => (
                <Card
                  key={card.id}
                  offer={card}
                  onMouseMove={(id) => setActiveCard(id)}
                  variant="vertical"
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
