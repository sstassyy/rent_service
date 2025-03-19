import React from "react";
import { CitiesCardList } from "../../components/cities-card-list/cities-card-list";
import { FullOffer, OffersList } from "../../types/offer";
import Map from "../../components/map/map"; // Карта с метками объявлений

type MainPageProps = {
  rentalOffersCount: number;
  offersList: OffersList[]; // Этот массив идет в CitiesCardList
  offers: FullOffer[]; // Этот массив идет в Map
};

function MainPage({ rentalOffersCount, offersList, offers }: MainPageProps): React.ReactElement {
  const city = {
    latitude: 52.37403,
    longitude: 4.88969,
    zoom: 13,
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active" href="#">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="Rent service logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {["Paris", "Cologne", "Brussels", "Amsterdam", "Hamburg", "Dusseldorf"].map((cityName, index) => (
                <li className="locations__item" key={index}>
                  <a
                    className={`locations__item-link tabs__item ${cityName === "Amsterdam" ? "tabs__item--active" : ""}`}
                    href="#"
                  >
                    <span>{cityName}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentalOffersCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use href="#icon-arrow-select"></use>
                  </svg>
                </span>
              </form>
              <CitiesCardList offersList={offersList} />
            </section>

            {/* Оставляем карту с метками, но удаляем карту-картинку */}
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} city={city} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
