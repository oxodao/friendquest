import {GOT_RESULTS_ADD_FRIEND, REMOVED_FRIEND, TOGGLE_ADD_FRIEND, UPDATE_ADD_FRIEND} from "../actions/friends_actions";

const initialState = {
    shown: false,
    typed: '',
    results: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_ADD_FRIEND:
            return {...state, shown: action.payload.shown};
        case UPDATE_ADD_FRIEND:
            return {...state, typed: action.payload.typed};
        case GOT_RESULTS_ADD_FRIEND:
            return { ...state, results: action.payload.results};
        default:
            return state;
    }
}
