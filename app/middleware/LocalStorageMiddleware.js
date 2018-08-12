import { DELETE_TOKEN, GET_TOKEN } from '../actions/token_actions';
import { readTokenAction }         from "../actions/token_actions";

export const NO_TOKEN_AVAILABLE = "NO_TOKEN_AVAILABLE";

export default store => next => {
    return action => {

        if (action.type === GET_TOKEN) {
            let token        = localStorage.getItem('friendquest_token');
            if (null !== token && 0 < token.length) {
                store.dispatch(readTokenAction({ token }));
            } else {
                store.dispatch(readTokenAction({ token: NO_TOKEN_AVAILABLE }));
            }
        } else if (action.type === DELETE_TOKEN) {
            localStorage.removeItem('friendquest_token');
            store.dispatch(readTokenAction({ token: NO_TOKEN_AVAILABLE }));
        }

        return next(action);
    };
};