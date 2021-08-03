export const ADD_FRIEND = 'ADD_FRIEND';
export const addFriend = newFriendInfo => ({
    type: ADD_FRIEND,
    payload: { newFriendInfo },
});

export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const updateFriend = (friendId, updates) => ({
    type: UPDATE_FRIEND,
    payload: { friendId, updates },
});

export const DELETE_FRIEND = 'DELETE_FRIEND';
export const deleteFriend = friendId => ({
    type: DELETE_FRIEND,
    payload: { friendId },
});