import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers, setSortType } from './action';
import { CITIES, SORT_TYPES } from '../const';
import { CARD_MOCK_DATA, CARD_NEIGHBOURHOOD_MOCK_DATA, USER_DATA, OFFER_MOCK_DATA, COMMENT_MOCK_DATA } from '../mock/offers';
import type { CardTypeData, UserTypeData, OfferTypeData, CommentTypeData } from '../components/type';

interface OffersState {
  city: string;
  offers: CardTypeData[];
  userData: UserTypeData;
  offerData: OfferTypeData;
  commentData: CommentTypeData[];
  cardNeighbourhoodData: CardTypeData[];
  sortType: string;
}

const initialState: OffersState = {
  city: CITIES[0],
  offers: CARD_MOCK_DATA,
  userData: USER_DATA,
  offerData: OFFER_MOCK_DATA,
  commentData: COMMENT_MOCK_DATA,
  cardNeighbourhoodData: CARD_NEIGHBOURHOOD_MOCK_DATA,
  sortType: SORT_TYPES[0]
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

export default reducer;

