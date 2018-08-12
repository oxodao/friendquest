import {UPDATE_SNACKBAR} from "../actions/snackbar_actions";

const initialState = {
    open: false,
    message: ''
};

export default function (state = initialState, action) {
    switch(action.type) {
        case UPDATE_SNACKBAR:
            return { ...state, open: action.payload.open, message: action.payload.message };
        default:
            return state;
    }
};
