const Setting = {
    rentOffersCount: 312,
  } as const;
  
  export const AppRoute = {
    Main: '/',
    Login: '/login',
    Favorites: '/favorites',
    Offer: '/offer',
  } as const;
  
  const AuthorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknown: 'UNKNOWN',
  } as const;
  
  export { Setting, AuthorizationStatus };