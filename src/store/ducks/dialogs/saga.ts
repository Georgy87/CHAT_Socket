import { call, put, takeLatest } from "redux-saga/effects";

import { DialogsActionType } from "./types";
import dialogsApi from "../../../services/api/dialogsApi";
import { setDialogs } from './actions';

export function* fetchUserDataRequest() {
    try {
        //@ts-ignore
        const data = yield call(dialogsApi.getAll);
        yield put(setDialogs(data));
    } catch (err) {
        console.log(err);
    }
}

export function* DialogsSaga() {
    yield takeLatest(DialogsActionType.FETCH_DIALOGS, fetchUserDataRequest);
}


