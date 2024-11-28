import Card from '../../components/card';
import CityName from '../../components/city-name';
import SortTypes from '../../components/sort-types';
import Header from '../../components/header';
import { CARD_MOCK_DATA, SITIES, SORT_TYPES, USER_DATA } from '../../const';

type MainPageProps = {
  PlacesCount: number;
}

function MainPage({PlacesCount}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header
        headerUserName={USER_DATA.userName}
        favoriteCount={USER_DATA.favoriteCount}
      />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {SITIES.map((city) => (
                <CityName
                  key={city}
                  cityName={city}
                />
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{PlacesCount} places to stay in Amsterdam</b>
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
                    <SortTypes
                      key={sort}
                      sortType={sort}
                    />
                  ))}
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {CARD_MOCK_DATA.map((card) => (
                  <Card
                    key={card.id}
                    title={card.title}
                    type={card.type}
                    price={card.price}
                    previewImage={card.previewImage}
                    isPremium={card.isPremium}
                    rating={card.rating}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
