import {combineReducers} from 'redux';
import tokenReducer      from './token_reducer';
import snackbarReducer   from './snackbar_reducer';

export default combineReducers({
    tokenReducer,
    snackbarReducer,
});