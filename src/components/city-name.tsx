type CityNameProps = {
  cityName: string;
  selectedCity: string | null;
  onClickCity: () => void;
};

function CityName({ cityName, selectedCity, onClickCity }: CityNameProps): JSX.Element {
  const isActive = cityName === selectedCity;

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
        onClick={onClickCity}
      >
        <span>{cityName}</span>
      </a>
    </li>
  );
}

export default CityName;
