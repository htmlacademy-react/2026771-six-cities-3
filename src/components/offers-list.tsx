import { useState } from 'react';
import Card from './card';
import SortTypes from './sort-types';
import { SORT_TYPES } from '../const';
import { CardTypeData } from './type';
import { Map } from './map';

type OfferListProps = {
  cardsData: CardTypeData[];
  placesCount: number;
  selectedCity: string | null;
};

function OfferList({
  cardsData,
  placesCount,
  selectedCity,
}: OfferListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleMouseMove = (id: string | null) => {
    setActiveCard(id);
  };

  const location = cardsData[0]?.city.location;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {placesCount} places to stay in {selectedCity}
        </b>
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
          {cardsData.map((offer) => (
            <Card
              key={offer.id}
              offer={offer}
              onMouseMove={() => handleMouseMove(offer.id)}
              variant="vertical"
              isActive={activeCard === offer.id}
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        {location && (
          <Map
            location={location}
            offers={cardsData}
            activeOfferId={activeCard}
            className="cities__map map"
          />
        )}
      </div>
    </div>
  );
}

export default OfferList;
