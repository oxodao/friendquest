import { DEFAULT_CONFIG, GOT_CONFIG } from "../actions/config_actions";

const initialState = DEFAULT_CONFIG;

export default function (state = initialState, action) {
    switch(action.type) {
        case GOT_CONFIG:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}