export const ADD_FRIEND = 'ADD_FRIEND';
export const addFriend = newFriendInfo => ({
    type: ADD_FRIEND,
    payload: { newFriendInfo },
});

export const EDIT_FRIEND = 'EDIT_FRIEND';
export const editFriend = updates => ({
    type: EDIT_FRIEND,
    payload: { updates },
});

export const DELETE_FRIEND = 'DELETE_FRIEND';
export const deleteFriend = friendId => ({
    type: DELETE_FRIEND,
    payload: { friendId },
});