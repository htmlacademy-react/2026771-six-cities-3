import CityName from '../../components/city-name';
import Header from '../../components/header';
import OfferList from '../../components/offers-list';
import { CITIES } from '../../const';
import { CARD_MOCK_DATA } from '../../mock/offers';
import { UserTypeData } from '../../components/type';

type MainPageProps = {
  userData: UserTypeData;
}

function Main({ userData }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header
        headerUserName={userData.userName}
        favoriteCount={userData.favoriteCount}
      />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (
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
          <OfferList
            cardsData={CARD_MOCK_DATA}
            placesCount={CARD_MOCK_DATA.length}
          />
          <div className="cities__right-section">
      <section className="cities__map map" />
      </div>
    </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
