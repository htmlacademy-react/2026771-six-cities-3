import Main from './pages/main-page-component/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './const';
import Favorites from './pages/favortites-page-component/favorites';
import Login from './pages/login-page-component/login';
import Offer from './pages/offer-page-component/offer';
import Notfound from './pages/not-found-page-component/not-found';
import PrivateRoute from './components/private-route';
import { OfferTypeData, CardTypeData, UserTypeData, CommentTypeData } from './components/type';

type AppProps = {
  userData: UserTypeData;
  offerData: OfferTypeData;
  cardsData: CardTypeData[];
  commentData: CommentTypeData[];
  cardNeighbourhoodData: CardTypeData[];
}

function App({userData, offerData, cardsData, commentData, cardNeighbourhoodData}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main userData={userData} placesCount={cardsData.length} cardsData={cardsData} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Offer}
          element={
            <Offer
              userData={userData}
              offerData={offerData}
              commentData={commentData}
              cardNeighbourhoodData={cardNeighbourhoodData}
            />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites favorites={cardsData.filter((card) => card.isFavorite)} />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<Notfound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
