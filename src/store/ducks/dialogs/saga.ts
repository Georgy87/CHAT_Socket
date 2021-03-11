import { call, put, takeLatest } from "redux-saga/effects";

import { DialogsActionType, DialogsInfoType, FetchCreateDialogType, FetchCreateGroupDialogType, FetchDialogByIdType, FetchDialogsType } from "./types";
import dialogsApi from "../../../services/api/dialogsApi";
import { setDialogs } from './actions';
import { UserInfo } from "../../ducks/user/types";

export function* fetchDialogsRequest() {
    try {
        const data: DialogsInfoType[] = yield call(dialogsApi.getAll);
        yield put(setDialogs(data));
    } catch (err) {
        console.log(err);
    }
}

export function* fetchCreateDialogRequest({ payload }: FetchCreateDialogType) {
    try {
        yield call(dialogsApi.createDialog, payload);
    } catch (err) {
        console.log(err);
    }
}

export function* fetchCreateDialogGroupRequest({ payload }: FetchCreateGroupDialogType) {
    try {
        yield call(dialogsApi.createGroupDialog, payload);
    } catch (err) {
        console.log(err);
    }
}

export function* fetchDialogByIdRequest({ payload }: FetchDialogByIdType ) {
    try {
        const data: string = yield call(dialogsApi.getDialogById, payload);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

export function* DialogsSaga() {
    yield takeLatest(DialogsActionType.FETCH_DIALOGS, fetchDialogsRequest);
    yield takeLatest(DialogsActionType.FETCH_CREATE_DIALOG, fetchCreateDialogRequest);
    yield takeLatest(DialogsActionType.FETCH_CREATE_GROUP_DIALOG, fetchCreateDialogGroupRequest);
    yield takeLatest(DialogsActionType.FETCH_DIALOG_BY_ID, fetchDialogByIdRequest);

}


