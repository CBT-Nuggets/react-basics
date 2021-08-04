import { createSelector } from 'reselect';
import { getFriends, getFriendById } from '../friends/selectors';

export const getFavoriteIds = state => state.favorites;

export const getFavorites = createSelector(
    getFavoriteIds,
    state => id => getFriendById(id)(state), // This is really strange - we basically have to bind "state" to getFriendById
    (ids, getFriendById) => ids.map(id => getFriendById(id)),
);

export const getIsFavorite = (id, state) => getFavoriteIds(state).includes(id);

export const getNonFavorites = createSelector(
    getFriends,
    getFavoriteIds,
    (friends, favoriteIds) => friends.filter(friend => !favoriteIds.includes(friend.id)),
);