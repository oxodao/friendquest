import {
    FETCH_USER_INFO,
    LOGIN, REMOVE_FRIEND,
    gotUserInfo, ADD_FRIEND,

}                                   from "../actions/token_actions";
import { takeEvery }                from "redux-saga/effects";
import { login }                    from "./auth";
import { getUserInfo, sendProfile } from "./user";
import { addFriend, removeFriend }  from "./friend";
import { SEND_PROFILE }             from "../actions/settings_profile_actions";
import { FETCH_GAMES } from "../actions/game_actions";
import { getGames } from "./game";


export default function* vsaga() {
    // Auth
    yield takeEvery(LOGIN, login);

    // User
    yield takeEvery(FETCH_USER_INFO, getUserInfo);
    yield takeEvery(SEND_PROFILE, sendProfile);

    // Games
    yield takeEvery(FETCH_GAMES, getGames);

    // Friend
    yield takeEvery(ADD_FRIEND, addFriend);
    yield takeEvery(REMOVE_FRIEND, removeFriend);
}