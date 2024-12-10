import React from 'react';
import ReactDOM from 'react-dom/client';
import { CARD_MOCK_DATA, USER_DATA, OFFER_MOCK_DATA, COMMENT_MOCK_DATA, CARD_NEIGHBOURHOOD_MOCK_DATA } from './mock/offers';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      userData={USER_DATA}
      offerData={OFFER_MOCK_DATA}
      cardsData={CARD_MOCK_DATA}
      commentData={COMMENT_MOCK_DATA}
      cardNeighbourhoodData={CARD_NEIGHBOURHOOD_MOCK_DATA}
    />
  </React.StrictMode>
);
