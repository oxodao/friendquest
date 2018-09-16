import {gotGamesAction}         from "../actions/game_actions";
import {put, call, select}      from "redux-saga/effects";
import { checkToken }           from "./auth";
import { updateSnackbarAction } from "../actions/snackbar_actions";

export function* getGames() {
    let url = '/api/games';

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
            yield put(gotGamesAction({ results: resp }));
        } else {
            yield put(updateSnackbarAction({
                open: true,
                message: 'Une erreur est survenue! (' + res.status + ')',
            }));
        }
    }
}