import { myProfileData } from '../data';
import { UPDATE_PROFILE } from '../actions/profile';

export const profileReducer = (state = myProfileData, action) => {
    const { type, payload } = action;

    switch (type) {
    case UPDATE_PROFILE: {
        const { updates } = payload;
        return { ...state, ...updates };
    }
    default: {
        return state;
    }
    }
}