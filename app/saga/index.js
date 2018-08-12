import {getTokenAction, LOGIN, setTokenAction, updateTypedCredAction} from "../actions/token_actions";
import {takeEvery, put, call}                                         from "redux-saga/effects";
import {updateSnackbarAction}                                         from "../actions/snackbar_actions";

function* login(action) {
    let creds = JSON.stringify(action.payload);
    const res = yield call(fetch, "/login", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: creds
        },
    );

    if (200 === res.status) {
        let json = yield call([res, 'json']);
        yield put(updateTypedCredAction({username: '', password: ''}));
        yield put(setTokenAction({token: json['token']}));
        yield put(getTokenAction());
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

export default function* vsaga() {
    yield takeEvery(LOGIN, login);
}