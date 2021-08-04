import { getFriends, getFriendById } from './friends';

export const getFavoriteIds = state => state.favorites;

export const getFavorites = state => getFavoriteIds(state).map(id => getFriendById(id, state));

export const getIsFavorite = (id, state) => getFavoriteIds(state).includes(id);

export const getNonFavorites = state => getFriends(state).filter(friend => !getFavoriteIds(state).includes(friend.id));