import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index'; // Подключаем store
import App from './components/app/app';
import { Setting } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App rentalOffersCount={Setting.rentOffersCount} />
    </Provider>
  </React.StrictMode>
);
