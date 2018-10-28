import {DEFAULT_GAME, DISPLAY_ONE_GAME} from '../actions/game_actions';

const initialState = DEFAULT_GAME;

export default function (state = initialState, action) {
    switch (action.type) {
        case DISPLAY_ONE_GAME:
            return {...state, ...action.payload};
        default:
            return state;
    }
}