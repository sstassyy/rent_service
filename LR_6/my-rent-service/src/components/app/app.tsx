import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index"; // Импортируем Redux-хранилище
import MainPage from "../../pages/main-page/main-page";
import FavoritesPage from "../../pages/favorites/favorites";
import LoginPage from "../../pages/login/login";
import OfferPage from "../../pages/offer/offer";
import ErrorPage from "../../pages/404/404";
import { AppRoute, AuthorizationStatus } from "../../const";
import { PrivateRoute } from "../../components/private-route/private-route";

type AppMainPageProps = {
  rentalOffersCount: number;
};

function App({ rentalOffersCount }: AppMainPageProps): React.JSX.Element {
  // Получаем данные из Redux
  const offers = useSelector((state: RootState) => state.offers);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage rentalOffersCount={rentalOffersCount} />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage /> {/* Теперь данные берутся из Redux */}
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
