import { FullOffer } from "./types/offer";
import { SortOffersType, SortType } from "./const"; 

export const getCityOffers = (offers: FullOffer[], city: string) => {
  return offers.filter((offer) => offer.city.name === city);
};

export const sortOffers = (offers: FullOffer[], sortType: SortType): FullOffer[] => {
  switch (sortType) {
    case "PriceLowToHigh":
      return [...offers].sort((a, b) => a.price - b.price);
    case "PriceHighToLow":
      return [...offers].sort((a, b) => b.price - a.price);
    case "RatingHighToLow":
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};
