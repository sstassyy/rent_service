import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
    return (
        <Router>
            <Routes>
                <Route 
                    path={AppRoute.Main} 
                    element={<MainPage rentalOffersCount={rentalOffersCount} />} 
                />

                <Route 
                    path={AppRoute.Favorites} 
                    element={
                        <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                            <FavoritesPage />
                        </PrivateRoute>
                    }
                />    

                <Route 
                    path={AppRoute.Login} 
                    element={<LoginPage />} 
                />
                <Route 
                    path={AppRoute.Offer} 
                    element={<OfferPage />} 
                />
                <Route 
                    path="*" 
                    element={<ErrorPage />} 
                />
            </Routes>
        </Router>
    );
}

export default App;
