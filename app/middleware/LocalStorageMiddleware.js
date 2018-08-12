import {DELETE_TOKEN, GET_TOKEN, SET_TOKEN} from '../actions/token_actions';
import {readTokenAction}                    from "../actions/token_actions";

export const NO_TOKEN_AVAILABLE = "NO_TOKEN_AVAILABLE";

export default store => next => {
    return action => {

        switch (action.type) {
            case SET_TOKEN:
                localStorage.setItem('friendquest_token', action.payload.token);
                break;
            case GET_TOKEN:
                let token = localStorage.getItem('friendquest_token');
                if (null !== token && 0 < token.length) {
                    store.dispatch(readTokenAction({token}));
                } else {
                    store.dispatch(readTokenAction({token: NO_TOKEN_AVAILABLE}));
                }
                break;
            case DELETE_TOKEN:
                localStorage.removeItem('friendquest_token');
                store.dispatch(readTokenAction({token: NO_TOKEN_AVAILABLE}));
                break;
        }

        return next(action);
    };
};