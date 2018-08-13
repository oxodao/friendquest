import {combineReducers} from 'redux';
import tokenReducer      from './token_reducer';
import snackbarReducer   from './snackbar_reducer';
import friendReducer     from './friend_reducer';

export default combineReducers({
    tokenReducer,
    snackbarReducer,
    friendReducer,
});