import {updateSnackbarAction} from "../actions/snackbar_actions";

import {
    fetchUserInfoAction,
    getTokenAction,
    readTokenAction,
    setTokenAction,
    updateTypedCredAction,
    deleteTokenAction,
}                  from "../actions/token_actions";
import {call, put} from "redux-saga/effects";
import jwt_decode  from "jwt-decode";

export function* checkToken(token, refresh, isMeRequest = false) {
    let decoded_token = jwt_decode(token);
    if (undefined !== decoded_token.exp) {
        if (decoded_token.exp < Date.now().valueOf() / 1000) {
            const res = yield call(fetch, '/token/refresh', {
                headers: {
                    'Accept': 'application/ld+json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                method: 'POST',
                body: 'refresh_token=' + refresh,
            });

            if (200 === res.status) {
                let newToken                  = yield call([res, 'json']);
                localStorage["token"]         = newToken["token"];
                localStorage["refresh_token"] = newToken["refresh_token"];
                yield put(readTokenAction({token: newToken["token"], refreshToken: newToken["refresh_token"]}));
                if (!isMeRequest) {
                    yield put(fetchUserInfoAction());
                }
            } else {
                yield put(deleteTokenAction());
                return false;
            }
        }
    }
    return true;
}

export function* login(action) {
    let creds = JSON.stringify(action.payload);
    const res = yield call(fetch, "/login", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: creds,
        },
    );

    if (200 === res.status) {
        let json = yield call([res, 'json']);
        yield put(updateTypedCredAction({username: '', password: ''}));
        yield put(setTokenAction({token: json['token'], refreshToken: json['refresh_token']}));
        yield put(getTokenAction());
        yield put(fetchUserInfoAction());
    } else if (401 === res.status) {
        yield put(updateTypedCredAction({password: ''}));
        yield put(updateSnackbarAction({
            open: true,
            message: 'Pseudo ou mot de passe invalide',
        }));
    } else {
        yield put(updateTypedCredAction({password: ''}));
        yield put(updateSnackbarAction({
            open: true,
            message: 'Une erreur est survenue! (' + res.status + ')',
        }));
        console.log(res);
    }
}