import {
    GET_TOKEN,
    READ_TOKEN,
    DELETE_TOKEN,
    UPDATE_TYPED_CRED,
    LOGIN,
    SET_TOKEN,
    GOT_USER_INFO,
}                           from "../actions/token_actions";
import jwt_decode           from "jwt-decode";
import User                 from '../model/User';
import {NO_TOKEN_AVAILABLE} from '../middleware/LocalStorageMiddleware';

const initialState = {
    username: '',
    password: '',
    token: '',
    refreshToken: '',
    user: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_TYPED_CRED:
            return {...state, ...action.payload};

        case READ_TOKEN:
            if (NO_TOKEN_AVAILABLE === action.payload.token || undefined === action.payload.token || null === action.payload.token || 0 >= action.payload.token.length) {
                return {...state, token: action.payload.token, refreshToken: action.payload.refreshToken};
            }

            let user = new User(jwt_decode(action.payload.token));
            return {...state, token: action.payload.token, refreshToken: action.payload.refreshToken, user};

        case DELETE_TOKEN:
            return {...state, user: null};

        case GOT_USER_INFO:
            let currUser = new User();
            currUser.updateInfo(action.payload.info);
            return {...state, user: currUser};

        default:
            return state;
    }
};