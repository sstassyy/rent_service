import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index";
import { CitiesCardList } from "../../components/cities-card-list/cities-card-list";
import Map from "../../components/map/map";
import { CITIES_LOCATION } from "../../const";
import { FullOffer } from "../../types/offer";
import { changeCity } from "../../store/reducer";
import SortOptions from "../../components/sort-options/sort-options"; // ✅ Добавлена сортировка

function MainPage(): React.ReactElement {
  const dispatch = useDispatch();
  const city = useSelector((state: RootState) => state.city) as keyof typeof CITIES_LOCATION;
  const offersList = useSelector((state: RootState) => state.sortedOffers);

  const offers: FullOffer[] = offersList.map((offer) => ({
    ...offer,
    description: "Default description",
    bedrooms: 2,
    goods: ["Wi-Fi", "Heating"],
    host: {
      name: "Host",
      avatarUrl: "/img/avatar.jpg",
      isPro: false,
    },
    images: offer.previewImage ? [offer.previewImage] : ["/img/default.jpeg"], // ✅ Если `previewImage` пустой, ставим заглушку
    maxAdults: 2,
  }));

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
              {Object.keys(CITIES_LOCATION).map((cityName, index) => (
                <li className="locations__item" key={index}>
                  <button
                    className={`locations__item-link tabs__item ${cityName === city ? "tabs__item--active" : ""}`}
                    onClick={() => dispatch(changeCity(cityName))}
                  >
                    <span>{cityName}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersList.length} places to stay in {city}</b>
              
              {/* ✅ Добавлена сортировка */}
              <SortOptions />

              {offersList.length > 0 ? (
                <CitiesCardList offersList={offersList} />
              ) : (
                <p>No offers available in {city}.</p>
              )}
            </section>

            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} city={CITIES_LOCATION[city]} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
