import React from 'react';
import ReactDOM from 'react-dom/client';
import {SETTING_CARD} from './const';
import App from './components/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      PlacesCount = {SETTING_CARD.PlacesCount}
    />
  </React.StrictMode>
);
