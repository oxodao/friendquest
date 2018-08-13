import {updateSnackbarAction}                   from "../actions/snackbar_actions";
import {checkToken}                             from "./auth";
import {put, call, select}                      from "redux-saga/effects";
import {addedFriendAction, removedFriendAction} from "../actions/token_actions";

export function* removeFriend(action) {
    let url = '/api/friends/' + action.payload.user;

    const oldToken = yield select(item => item.tokenReducer);

    if (yield checkToken(oldToken.token, oldToken.refreshToken, true)) {
        const token = yield select(item => item.tokenReducer);

        const res = yield call(fetch, url, {
                headers: {
                    'Accept': 'application/ld+json',
                    'Authorization': 'Bearer ' + token.token,
                },
                method: 'DELETE',
            },
        );

        if (200 === res.status) {
            let resp = yield call([res, 'json']);
            yield put(removedFriendAction({user: resp.id}));
        } else {
            yield put(updateSnackbarAction({
                open: true,
                message: 'Une erreur est survenue! (' + res.status + ')',
            }));
        }
    }
}

export function* addFriend(action) {
    let url = '/api/friends/' + action.payload.user;

    const oldToken = yield select(item => item.tokenReducer);

    if (yield checkToken(oldToken.token, oldToken.refreshToken, true)) {
        const token = yield select(item => item.tokenReducer);

        const res = yield call(fetch, url, {
                headers: {
                    'Accept': 'application/ld+json',
                    'Authorization': 'Bearer ' + token.token,
                },
                method: 'POST',
            },
        );

        if (200 === res.status) {
            let resp = yield call([res, 'json']);
            yield put(addedFriendAction(resp));
        } else {
            yield put(updateSnackbarAction({
                open: true,
                message: 'Une erreur est survenue! (' + res.status + ')',
            }));
        }
    }
}