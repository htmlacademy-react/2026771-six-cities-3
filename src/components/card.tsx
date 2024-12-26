import { Link } from 'react-router-dom';

type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  isPremium: boolean;
  rating: number;
};

type CardProps = {
  offer: Offer;
  onMouseMove: (id: string | null) => void;
  variant: 'vertical' | 'horizontal';
  isActive: boolean;
};

function Card({ offer, onMouseMove, variant, isActive }: CardProps): JSX.Element {
  const { id, title, type, price, previewImage, isPremium, rating } = offer;

  const config = {
    vertical: {
      classPrefix: 'cities',
      imageWidth: 260,
      imageHeight: 200,
    },
    horizontal: {
      classPrefix: 'favorites',
      imageWidth: 150,
      imageHeight: 110,
    },
  };

  const { classPrefix, imageWidth, imageHeight } = config[variant];

  return (
    <article
      className={`${classPrefix}__card place-card ${isActive ? 'place-card--active' : ''}`}
      onMouseEnter={() => onMouseMove(id)}
      onMouseLeave={() => onMouseMove(null)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${classPrefix}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imageWidth}
            height={imageHeight}
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(rating / 5) * 100}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
