import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../../pages/main-page/main-page";
import FavoritesPage from "../../pages/favorites/favorites";
import LoginPage from "../../pages/login/login";
import OfferPage from "../../pages/offer/offer";
import ErrorPage from "../../pages/404/404";
import { AppRoute, AuthorizationStatus } from "../../const";
import { PrivateRoute } from "../../components/private-route/private-route";
import { FullOffer, OffersList } from "../../types/offer";
import Offer from "../../pages/offer/offer";

// Обновленный тип, включающий offersList
type AppMainPageProps = {
  rentalOffersCount: number;
  offersList: OffersList[];
  offers: FullOffer[];
};

function App({ rentalOffersCount, offers, offersList }: AppMainPageProps): React.JSX.Element {
  return (
    <BrowserRouter>
    <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage rentalOffersCount={rentalOffersCount} offersList={offersList} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage offersList={offersList} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage offers={offers} />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
