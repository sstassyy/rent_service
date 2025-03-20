import { createAction } from '@reduxjs/toolkit';
import { FullOffer } from '../types/offer'; 

export const changeCity = createAction<string>('CHANGE_CITY');
export const setOffers = createAction<FullOffer[]>('SET_OFFERS'); 
