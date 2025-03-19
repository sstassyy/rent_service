import React from "react";
import { OffersList } from "../../types/offer";
import FavoriteCardList from "../../components/favorite-card-list/favorite-card-list";

type FavoritesPageProps = {
  offersList: OffersList[];
};

function FavoritesPage({ offersList }: FavoritesPageProps): React.ReactElement {
  // Фильтруем только избранные объявления
  const favoriteOffers = offersList.filter((offer) => offer.isFavorite);

  // Если нет избранных предложений — показываем сообщение
  if (favoriteOffers.length === 0) {
    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="/">
                  <img className="header__logo" src="img/logo.svg" alt="Rent service logo" width="81" height="41" />
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="page__main page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="favorites__title">Saved listings</h1>
              <p className="favorites__status">You have no favorite listings yet.</p>
            </section>
          </div>
        </main>
      </div>
    );
  }

  // Группируем избранные объявления по городам
  const favoriteCities = [...new Set(favoriteOffers.map((offer) => offer.city.name))];

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img className="header__logo" src="img/logo.svg" alt="Rent service logo" width="81" height="41" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listings</h1>
            <ul className="favorites__list">
              {favoriteCities.map((city) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <span className="locations__item-link">{city}</span>
                    </div>
                  </div>
                  <FavoriteCardList offers={favoriteOffers.filter((offer) => offer.city.name === city)} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img className="footer__logo" src="img/logo.svg" alt="Rent service logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
