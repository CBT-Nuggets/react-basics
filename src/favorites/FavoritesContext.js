import { createContext } from 'react';

export const FavoritesContext = createContext({ favoritesIds: [], toggleFavorite: () => {} });