import { DEFAULT_PROFILE, UPDATE_PROFILE } from "../actions/settings_profile_actions";

const initialState = DEFAULT_PROFILE;

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROFILE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}