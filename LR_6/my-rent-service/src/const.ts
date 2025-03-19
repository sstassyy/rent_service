export const Setting = {
  rentOffersCount: 312,
} as const;

export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
} as const;

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

// Описание координат городов для карты
export const CITIES_LOCATION: Record<string, { latitude: number; longitude: number; zoom: number }> = {
  Paris: { latitude: 48.8566, longitude: 2.3522, zoom: 13 },
  Cologne: { latitude: 50.9375, longitude: 6.9603, zoom: 13 },
  Brussels: { latitude: 50.8503, longitude: 4.3517, zoom: 13 },
  Amsterdam: { latitude: 52.37403, longitude: 4.88969, zoom: 13 },
  Hamburg: { latitude: 53.5511, longitude: 9.9937, zoom: 13 },
  Dusseldorf: { latitude: 51.2277, longitude: 6.7735, zoom: 13 },
};

// **Используем ENUM, чтобы соответствовать `SortType`**
export const SortOffersType = {
  Popular: "Popular",
  PriceLowToHigh: "Price: low to high",
  PriceHighToLow: "Price: high to low",
  RatingHighToLow: "Top rated first",
} as const;

export type SortType = keyof typeof SortOffersType; // Экспортируем `SortType`
