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

function App(): React.JSX.Element {
  // Получаем данные из Redux
  const offers = useSelector((state: RootState) => state.offers);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
