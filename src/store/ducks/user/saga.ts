import { call, put, takeLatest } from "redux-saga/effects";

import { SignInApiType, userApi } from "../../../services/api/userApi";
import { UserActionType, FetchUserLoginType, FetchUserRegistrationType, FetchFindUserType, FetchVerifyHash } from "./types";
import { setFindUser, setIsAuth, setUserData, setVerifyHash } from './actions';
import { openNotification } from "../../../utils/helpers";
import { UserInfo } from "../user/types";

export function* fetchUserDataRequest() {
    try {
        const data: UserInfo = yield call(userApi.getMe);
        yield put(setUserData(data));
    } catch (err) {
        if (err.response.status === 403) {
            yield put(setIsAuth(false));
            delete window.localStorage.token;
        }
    }
}

export function* fetchUserRegistrationRequest({ payload }: FetchUserRegistrationType) {
    try {
        yield call(userApi.signUp, payload);
    } catch (err) {
        yield console.log(err);
    }
}

export function* fetchUserLoginRequest({ payload }: FetchUserLoginType) {
    try {
        const data: SignInApiType = yield call(userApi.signIn, payload);

        //@ts-ignore
        window.axios.defaults.headers.common["token"] = data.token;
        window.localStorage["token"] = data.token;

        yield put(setUserData(data.user));
        yield put(setIsAuth(true));
    } catch (err) {
        yield console.log(err);
    }
}

export function* fetchVerifyUserRequest({ payload }: FetchVerifyHash) {
    try {
        yield call(userApi.verifyHash, payload);
        yield put(setVerifyHash(true));
    } catch (err) {
        yield put(setVerifyHash(false));
        yield console.log(err);
    }
}

export function* fetchFindUserRequest({ payload }: FetchFindUserType) {
    try {
        const data: UserInfo[] = yield call(userApi.findUsers, payload);
        yield put(setFindUser(data));
    } catch (err) {
        yield console.log(err);
    }
}

export function* UserSaga() {
    yield takeLatest(UserActionType.FETCH_USER_DATA, fetchUserDataRequest);
    yield takeLatest(UserActionType.FETCH_USER_REGISTRATION, fetchUserRegistrationRequest);
    yield takeLatest(UserActionType.FETCH_USER_LOGIN, fetchUserLoginRequest);
    yield takeLatest(UserActionType.FETCH_VERIFY_HASH, fetchVerifyUserRequest);
    yield takeLatest(UserActionType.FETCH_FIND_USER, fetchFindUserRequest);
}

