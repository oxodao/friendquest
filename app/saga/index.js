import {LOGIN, updateTypedCredAction} from "../actions/token_actions";
import {takeEvery, put, call}         from "redux-saga/effects";
import {updateSnackbarAction}         from "../actions/snackbar_actions";

function* login(action) {
    const res = yield call(fetch, "/login", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(action.payload),
        },
    );

    if (200 === res.status) {
        yield put(updateTypedCredAction({username: '', password: ''}));
        updateSnackbarAction({open: true, message: 'loggedin'});
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