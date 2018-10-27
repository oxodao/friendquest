import {
    FETCH_USER_INFO,
    LOGIN, REMOVE_FRIEND,
    gotUserInfo, ADD_FRIEND,

}                                      from "../actions/token_actions";
import { FETCH_GAMES, FETCH_ONE_GAME } from "../actions/game_actions";
import { getUserInfo, sendProfile }    from "./user";
import { addFriend, removeFriend }     from "./friend";
import { getGames, getOneGame }        from "./game";
import { SEND_PROFILE }                from "../actions/settings_profile_actions";
import { takeEvery }                   from "redux-saga/effects";
import { login }                       from "./auth";


export default function* vsaga() {
    // Auth
    yield takeEvery(LOGIN, login);

    // User
    yield takeEvery(FETCH_USER_INFO, getUserInfo);
    yield takeEvery(SEND_PROFILE, sendProfile);

    // Games
    yield takeEvery(FETCH_GAMES, getGames);
    yield takeEvery(FETCH_ONE_GAME, getOneGame);

    // Friend
    yield takeEvery(ADD_FRIEND, addFriend);
    yield takeEvery(REMOVE_FRIEND, removeFriend);
}