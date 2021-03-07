import { call, put, takeLatest } from "redux-saga/effects";

import { DialogsActionType, DialogsInfoType, DialogueParticipantsType, FetchCreateDialogType } from "./types";
import dialogsApi from "../../../services/api/dialogsApi";
import { setDialogs } from './actions';
import { UserInfo } from "../../ducks/user/types";

export function* fetchDialogsRequest() {
    try {
        const data: DialogsInfoType<DialogueParticipantsType>[] = yield call(dialogsApi.getAll);
        yield put(setDialogs(data));
    } catch (err) {
        console.log(err);
    }
}

export function* fetchCreateDialogRequest({ payload }: FetchCreateDialogType) {
    try {
        yield call(dialogsApi.create, payload);
    } catch (err) {
        console.log(err);
    }
}

export function* DialogsSaga() {
    yield takeLatest(DialogsActionType.FETCH_DIALOGS, fetchDialogsRequest);
    yield takeLatest(DialogsActionType.FETCH_CREATE_DIALOG, fetchCreateDialogRequest);
}


