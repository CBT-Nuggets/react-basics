import { myProfileData } from '../data';
import { UPDATE_PROFILE } from '../profile/actions';

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