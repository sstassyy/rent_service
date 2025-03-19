import { FullOffer } from './types/offer';

export const getCityOffers = (offers: FullOffer[], city: string) => {
  return offers.filter((offer) => offer.city.name === city);
};
