import { createAction } from '@reduxjs/toolkit';
import type { CardTypeData } from '../components/type';

export const setCity = createAction<string>('offers/setCity');

export const setOffers = createAction<CardTypeData[]>('offers/setOffers');

export const setSortType = createAction<string>('offers/setSortType');
