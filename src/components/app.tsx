import MainPage from '../pages/main-page-component/main';

type MainPageProps = {
  PlacesCount: number;
}

function App({PlacesCount}: MainPageProps): JSX.Element {
  return (
    <MainPage PlacesCount={PlacesCount} />
  );
}

export default App;
