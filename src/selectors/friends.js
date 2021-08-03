export const getFriends = state => state.friends;

export const getFriendById = (id, state) => getFriends(state).find(friend => friend.id === id);