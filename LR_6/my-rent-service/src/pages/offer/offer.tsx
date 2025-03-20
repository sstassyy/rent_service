import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { FullOffer } from '../../types/offer';
import ErrorPage from '../../pages/404/404';
import ReviewForm from "../../components/review-form/review-form";
import ReviewList from "../../components/review-list/review-list";
import reviews from "../../mocks/reviews";
import Map from "../../components/map/map";
import NearbyOffersList from "../../components/nearby-offers-list/nearby-offers-list";

function OfferPage(): React.ReactElement {
  const { id } = useParams(); 
  const offer: FullOffer | undefined = useSelector((state: RootState) =>
    state.offers.find((item: FullOffer) => item.id === id)
  );

  if (!offer) {
    return <ErrorPage />;
  }

  const nearbyOffers: FullOffer[] = useSelector((state: RootState) =>
    state.offers.filter((item: FullOffer) => item.city.name === offer.city.name && item.id !== offer.id).slice(0, 3)
  );

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img className="header__logo" src="/img/logo.svg" alt="Rent service logo" width="81" height="41" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.length > 0 ? ( 
                offer.images.map((src, index) => (
                  <div className="offer__image-wrapper" key={index}>
                    <img className="offer__image" src={src} alt={offer.title} />
                  </div>
                ))
              ) : (
                <p>No images available</p> 
              )}
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{offer.type}</li>
                <li className="offer__feature offer__feature--bedrooms">{offer.bedrooms} Bedrooms</li>
                <li className="offer__feature offer__feature--adults">Max {offer.maxAdults} adults</li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What's inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((item, index) => (
                    <li className="offer__inside-item" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt={offer.host.name} />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                </div>
              </div>

              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
        </section>

        <Map offers={nearbyOffers} city={offer.city.location} height="500px" />

        <NearbyOffersList offers={nearbyOffers} />

      </main>
    </div>
  );
}

export default OfferPage;
