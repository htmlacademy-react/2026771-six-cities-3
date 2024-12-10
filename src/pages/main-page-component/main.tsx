import CityName from '../../components/city-name';
import Header from '../../components/header';
import OfferList from '../../components/offers-list';
import { CITIES } from '../../const';
import { CARD_MOCK_DATA } from '../../mock/offers';
import { UserTypeData, CardTypeData } from '../../components/type';

type MainPageProps = {
  userData: UserTypeData;
  cardsData: CardTypeData[];
  placesCount: number;

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
          <OfferList
           cardsData={CARD_MOCK_DATA}
           placesCount={CARD_MOCK_DATA.length}
           />
        </div>
      </main>
    </div>
  );
}

export default Main;
