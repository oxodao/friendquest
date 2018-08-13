import {DELETE_TOKEN, fetchUserInfoAction, GET_TOKEN, SET_TOKEN} from '../actions/token_actions';
import {readTokenAction}                                         from "../actions/token_actions";

export const NO_TOKEN_AVAILABLE = "NO_TOKEN_AVAILABLE";

export default store => next => {
    return action => {

        switch (action.type) {
            case SET_TOKEN:
                localStorage.setItem('friendsquest_token', action.payload.token);
                localStorage.setItem('friendsquest_refresh_token', action.payload.refreshToken);
                break;
            case GET_TOKEN:
                let token = localStorage.getItem('friendsquest_token');
                let refreshToken = localStorage.getItem('friendsquest_refresh_token');
                if (null !== token && 0 < token.length && null !== refreshToken && 0 < refreshToken.length) {
                    store.dispatch(readTokenAction({token, refreshToken}));
                    store.dispatch(fetchUserInfoAction());
                } else {
                    store.dispatch(readTokenAction({token: NO_TOKEN_AVAILABLE, refreshToken: NO_TOKEN_AVAILABLE}));
                }
                break;
            case DELETE_TOKEN:
                localStorage.removeItem('friendsquest_token');
                localStorage.removeItem('friendsquest_refresh_token');
                store.dispatch(readTokenAction({token: NO_TOKEN_AVAILABLE}));
                break;
        }

        return next(action);
    };
};