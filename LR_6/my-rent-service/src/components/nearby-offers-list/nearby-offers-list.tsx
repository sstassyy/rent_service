import React from "react";
import { FullOffer } from "../../types/offer";
import CitiesCard from "../cities-card/cities-card";

type NearbyOffersListProps = {
  offers: FullOffer[];
};

function NearbyOffersList({ offers }: NearbyOffersListProps): React.ReactElement {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => (
          <CitiesCard
            key={offer.id}
            id={offer.id}
            title={offer.title}
            type={offer.type}
            price={offer.price}
            rating={offer.rating}
            previewImage={offer.images[0]}
            isPremium={offer.isPremium}
          />
        ))}
      </div>
    </section>
  );
}

export default NearbyOffersList;
