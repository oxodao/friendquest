import {TOGGLE_ADD_FRIEND, UPDATE_ADD_FRIEND} from "../actions/friends_actions";

const initialState = {
    shown: false,
    typed: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_ADD_FRIEND:
            return {...state, shown: action.payload.shown};
        case UPDATE_ADD_FRIEND:
            return {...state, typed: action.payload.typed};
        default:
            return state;
    }
}
