import {
    FETCH_USER_INFO,
    LOGIN, REMOVE_FRIEND,
    gotUserInfo, ADD_FRIEND,

}                                from "../actions/token_actions";
import {takeEvery}               from "redux-saga/effects";
import {login}                   from "./auth";
import {getUserInfo}             from "./user";
import {addFriend, removeFriend} from "./friend";


export default function* vsaga() {
    // Auth
    yield takeEvery(LOGIN, login);

    // User
    yield takeEvery(FETCH_USER_INFO, getUserInfo);

    // Friend
    yield takeEvery(ADD_FRIEND, addFriend);
    yield takeEvery(REMOVE_FRIEND, removeFriend);
}