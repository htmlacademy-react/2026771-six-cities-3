import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers } from './action';
import { CITIES } from '../const';
import { CARD_MOCK_DATA } from '../mock/offers';
import type { CardTypeData } from '../components/type';

interface OffersState {
  city: string;
  offers: CardTypeData[];
}

const initialState: OffersState = {
  city: CITIES[0],
  offers: CARD_MOCK_DATA,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export default reducer;

