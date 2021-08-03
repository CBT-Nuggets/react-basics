import { ADD_FRIEND, DELETE_FRIEND, UPDATE_FRIEND } from '../actions/friends';
import { friendsData } from '../data';

export const friendsReducer = (state = friendsData, action) => {
    const { type, payload } = action;

    switch (type) {
    case ADD_FRIEND: {
        const { newFriendInfo } = payload;
        return [newFriendInfo, ...state];
    }
    case UPDATE_FRIEND: {
        const { friendId, updates } = payload;
        return state.map(friend => {
            if (friend.id === friendId) {
                return { ...friend, ...updates };
            }

            return friend;
        });
    }
    case DELETE_FRIEND: {
        const { friendId } = payload;
        return state.filter(friend => friend.id !== friendId);
    }
    default: {
        return state;
    }
    }
}