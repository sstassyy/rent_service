import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "../../pages/main-page/main-page";
import FavoritesPage from "../../pages/favorites/favorites";
import LoginPage from "../../pages/login/login";
import OfferPage from "../../pages/offer/offer";
import ErrorPage from "../../pages/404/404";

type AppMainPageProps = {
    rentalOffersCount: number;
}

function App({ rentalOffersCount }: AppMainPageProps): JSX.Element {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage rentalOffersCount={rentalOffersCount} />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/offer" element={<OfferPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;
