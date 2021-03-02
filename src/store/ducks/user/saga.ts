import { call, put, takeLatest } from "redux-saga/effects";

import { userApi } from "../../../utils/api";
import { UserActionType } from "./types";
import { setIsAuth, setUserData } from './actions';

export function* fetchUserDataRequest() {
    try {
        const data = yield call(userApi.getMe);
        yield put(setUserData(data));
    } catch (err) {
        if (err.response.status === 403) {
            yield put(setIsAuth(false));
            delete window.localStorage.token;
        }
    }
}

export function* fetchUserLoginRequest() {
    try {

    } catch (err) {
        
    }
}



export function* UserSaga() {
    yield takeLatest(UserActionType.FETCH_USER_DATA, fetchUserDataRequest);
}

