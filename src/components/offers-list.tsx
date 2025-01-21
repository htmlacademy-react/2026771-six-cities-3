import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import Card from './card';
import SortTypes from './sort-types';
import { setSortType } from '../store/action';
import type { CardTypeData } from './type';
import { Map } from './map';
import { SORT_TYPES } from '../const';

type OfferListProps = {
  cardsData: CardTypeData[];
  placesCount: number;
  selectedCity: string | null;
};

const sortOffers = (offers: CardTypeData[], sortType: string): CardTypeData[] => {
  switch (sortType) {
    case SORT_TYPES[1]:
      return [...offers].sort((a, b) => a.price - b.price);
    case SORT_TYPES[2]:
      return [...offers].sort((a, b) => b.price - a.price);
    case SORT_TYPES[3]:
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

function OfferList({ cardsData, placesCount, selectedCity }: OfferListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector((state) => state.sortType);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sortedOffers = sortOffers(cardsData, sortType);

  const handleSortChange = (newType: string) => {
    dispatch(setSortType(newType));
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };


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
          <span className="places__sorting-type"
            tabIndex={0}
            onClick={handleMenuToggle}
          >
            {sortType}
            <svg className="places__sorting-arrow" width={7} height={4}>
              <use xlinkHref="#icon-arrow-select" />
            </svg>
          </span>
          {isMenuOpen && (
            <ul className="places__options">
              <SortTypes
                sortType={sortType}
                onSortChange={handleSortChange}
              />
            </ul>
          )}
        </form>
        <div className="cities__places-list places__list tabs__content">
          {sortedOffers.map((offer) => (
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
