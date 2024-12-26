import CityName from '../../components/city-name';
import Header from '../../components/header';
import OfferList from '../../components/offers-list';
import { CITIES } from '../../const';
import { CARD_MOCK_DATA } from '../../mock/offers';
import { UserTypeData } from '../../components/type';
import { useState } from 'react';

type MainPageProps = {
  userData: UserTypeData;
}

function Main({ userData }: MainPageProps): JSX.Element {
  const [selectedCity, setSelectedCity] = useState<string | null>("Amsterdam");;

  const filteredOffers = selectedCity
    ? CARD_MOCK_DATA.filter((offer) => offer.city.name === selectedCity)
    : CARD_MOCK_DATA;
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
      onClickCity={() => setSelectedCity(city)}
    />
  ))}
</ul>
          </section>
        </div>
        <div className="cities">
        <OfferList
    cardsData={filteredOffers}
    placesCount={filteredOffers.length}
    selectedCity={selectedCity}
  />
        </div>
      </main>
    </div>
  );
}

export default Main;
