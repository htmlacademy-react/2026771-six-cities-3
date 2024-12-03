import Main from './pages/main-page-component/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './const';
import Favotites from './pages/favortites-page-component/favorites';
import Login from './pages/login-page-component/login';
import Offer from './pages/offer-page-component/offer';
import Notfound from './pages/not-found-page-component/not-found';
import PrivateRoute from './components/private-route';

type MainPageProps = {
  PlacesCount: number;
}

function App({PlacesCount}: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main PlacesCount={PlacesCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favotites />
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
