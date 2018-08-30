import {updateSnackbarAction} from "../actions/snackbar_actions";
import {gotUserInfoAction}    from "../actions/token_actions";
import {checkToken}           from "./auth";
import {put, call, select} from "redux-saga/effects";

export function* getUserInfo() {
    let url = '/api/me';

    const oldToken = yield select(item => item.tokenReducer);

    if (yield checkToken(oldToken.token, oldToken.refreshToken, true)) {
        const token = yield select(item => item.tokenReducer);

        const res = yield call(fetch, url, {
                headers: {
                    'Accept': 'application/ld+json',
                    'Authorization': 'Bearer ' + token.token,
                },
                method: 'GET',
            },
        );

        if (200 === res.status) {
            let resp = yield call([res, 'json']);
            yield put(gotUserInfoAction({info: resp}));
        } else {
            yield put(updateSnackbarAction({
                open: true,
                message: 'Une erreur est survenue! (' + res.status + ')',
            }));
        }
    }
}

export function* sendProfile(action) {
    /**
     *  @TODO
     **/
    let url = '/api/me';

    const oldToken = yield select(item => item.tokenReducer);

    if (yield checkToken(oldToken.token, oldToken.refreshToken, true)) {
        const token = yield select(item => item.tokenReducer);

        const user = JSON.stringify(action.payload);

        const res = yield call(fetch, url, {
                headers: {
                    'Accept': 'application/ld+json',
                    'Authorization': 'Bearer ' + token.token,
                },
                method: 'POST',
                body: user
            },
        );

        if (200 === res.status) {
            yield put(getUserInfo());
        } else {
            yield put(updateSnackbarAction({
                open: true,
                message: 'Une erreur est survenue! (' + res.status + ')',
            }));
        }
    }
}
