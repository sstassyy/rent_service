import { SortType } from "./types/sort";
import { FullOffer } from "./types/offer";

export const sortOffers = (offers: FullOffer[], sortType: SortType): FullOffer[] => {
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
