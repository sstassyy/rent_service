import React from "react";
import { OffersList } from "../../types/offer";
import FavoriteCard from "../favorite-card/favorite-card";

type FavoriteCardListProps = {
  offers: OffersList[];
};

function FavoriteCardList({ offers }: FavoriteCardListProps): React.ReactElement {
  return (
    <div className="favorites__places">
      {offers.map((offer) => (
        <FavoriteCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export default FavoriteCardList;