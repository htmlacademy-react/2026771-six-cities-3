import { useState } from 'react';
import Card from './card';
import SortTypes from './sort-types';
import { SORT_TYPES } from '../const';
import { CardTypeData } from './type';

type OfferListProps = {
  cardsData: CardTypeData[];
  placesCount: number;
};

function OfferList({ cardsData, placesCount }: OfferListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesCount} places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width={7} height={4}>
              <use xlinkHref="#icon-arrow-select" />
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            {SORT_TYPES.map((sort) => (
              <SortTypes key={sort} sortType={sort} />
            ))}
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {cardsData.map((card) => (
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
      <div className="cities__right-section">
        <section className="cities__map map" />
      </div>
    </div>
  );
}

export default OfferList;
