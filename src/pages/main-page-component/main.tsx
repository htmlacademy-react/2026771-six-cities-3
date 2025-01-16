import CityName from '../../components/city-name';
import Header from '../../components/header';
import OfferList from '../../components/offers-list';
import { CITIES } from '../../const';
import { CARD_MOCK_DATA } from '../../mock/offers';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { setCity } from '../../store/action';

function Main(): JSX.Element {
  const { userData, city } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleCitySelect = (selectedCity: string) => {
    dispatch(setCity(selectedCity));
  };

  const filteredOffers = city
    ? CARD_MOCK_DATA.filter((offer) => offer.city.name === city)
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
              {CITIES.map((cityName) => (
                <CityName
                  key={cityName}
                  cityName={cityName}
                  selectedCity={city}
                  onClickCity={() => handleCitySelect(cityName)}
                />
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <OfferList
            cardsData={filteredOffers}
            placesCount={filteredOffers.length}
            selectedCity={city}
          />
        </div>
      </main>
    </div>
  );
}

export default Main;
