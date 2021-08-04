import { createSelector } from 'reselect';

export const getFriends = state => state.friends;

// Doing this little "spread operator method" thing to add an extra property will always trigger a re-render
// export const getFriendById = (id, state) => ({ ...getFriends(state).find(friend => friend.id === id), a: 1 });

export const getFriendById = id => createSelector(
    getFriends,
    friends => friends.find(friend => friend.id === id),
);

// export const getFriendByIdInternal = 