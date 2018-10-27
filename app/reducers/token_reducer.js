import {
    GET_TOKEN,
    READ_TOKEN,
    DELETE_TOKEN,
    UPDATE_TYPED_CRED,
    LOGIN,
    SET_TOKEN,
    GOT_USER_INFO, REMOVE_FRIEND, REMOVED_FRIEND, ADDED_FRIEND,
}                                  from "../actions/token_actions";
import { GOT_GAMES, GOT_ONE_GAME } from "../actions/game_actions";
import { NO_TOKEN_AVAILABLE }      from '../middleware/LocalStorageMiddleware';
import jwt_decode                  from "jwt-decode";
import User                        from '../model/User';

const initialState = {
    username    : '',
    password    : '',
    token       : '',
    refreshToken: '',
    user        : null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_TYPED_CRED:
            return { ...state, ...action.payload };

        case READ_TOKEN:
            if (NO_TOKEN_AVAILABLE === action.payload.token || undefined === action.payload.token || null === action.payload.token || 0 >= action.payload.token.length) {
                return { ...state, token: action.payload.token, refreshToken: action.payload.refreshToken };
            }

            let user = new User(jwt_decode(action.payload.token));
            return { ...state, token: action.payload.token, refreshToken: action.payload.refreshToken, user };

        case DELETE_TOKEN:
            return { ...state, token: null, refreshToken: null, user: null };

        case GOT_USER_INFO:
            let currUser = new User();
            currUser.updateInfo(action.payload.info);
            return { ...state, user: currUser };

        case ADDED_FRIEND:
            return { ...state, user: state.user.addFriend(action.payload) };

        case REMOVED_FRIEND:
            return { ...state, user: state.user.removeFriend(action.payload.user) };

        case GOT_GAMES:
            return { ...state, user: state.user.updateGames(action.payload.results) };

        case GOT_ONE_GAME:
            return { ...state, user: state.user.updateOneGame(action.payload.game) };

        default:
            return state;
    }
};