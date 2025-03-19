import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FullOffer } from "../types/offer";
import { offers } from "../mocks/offers";

// Определяем возможные варианты сортировки
export enum SortType {
  Popular = "Popular",
  PriceLowToHigh = "Price: low to high",
  PriceHighToLow = "Price: high to low",
  RatingHighToLow = "Top rated first"
}

interface State {
  city: string;
  offers: FullOffer[];
  sortedOffers: FullOffer[];
  sortType: SortType;
}

const initialState: State = {
  city: "Amsterdam",
  offers: offers,
  sortedOffers: offers.filter((offer) => offer.city.name === "Amsterdam"),
  sortType: SortType.Popular,
};

const sortOffers = (offers: FullOffer[], sortType: SortType): FullOffer[] => {
  switch (sortType) {
    case SortType.PriceLowToHigh:
      return [...offers].sort((a, b) => a.price - b.price);
    case SortType.PriceHighToLow:
      return [...offers].sort((a, b) => b.price - a.price);
    case SortType.RatingHighToLow:
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
      state.sortedOffers = sortOffers(
        state.offers.filter((offer) => offer.city.name === action.payload),
        state.sortType
      );
    },
    changeSortType(state, action: PayloadAction<SortType>) {
      state.sortType = action.payload;
      state.sortedOffers = sortOffers(
        state.offers.filter((offer) => offer.city.name === state.city),
        state.sortType
      );
    },
  },
});

export const { changeCity, changeSortType } = offersSlice.actions;
export default offersSlice.reducer;
