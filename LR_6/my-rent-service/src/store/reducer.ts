import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FullOffer } from "../types/offer";
import { offers } from "../mocks/offers"; // ✅ Используем `FullOffer[]`, а не `OffersList[]`

interface State {
  city: string;
  offers: FullOffer[];
  sortedOffers: FullOffer[];
}

const initialState: State = {
  city: "Amsterdam", 
  offers: offers, // ✅ Используем полный список объявлений
  sortedOffers: offers.filter((offer) => offer.city.name === "Amsterdam"), // ✅ Фильтруем по городу
};

const reducerSlice = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
      state.sortedOffers = state.offers.filter((offer) => offer.city.name === action.payload);
    },
  },
});

export const { changeCity } = reducerSlice.actions;
export const reducer = reducerSlice.reducer;
