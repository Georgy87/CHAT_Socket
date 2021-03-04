import { call, put, takeLatest } from "redux-saga/effects";

import { userApi } from "../../../utils/api";
import { UserActionType, FetchUserLoginType, FetchUserRegistrationType, FetchFindUserType } from "./types";
import { setIsAuth, setUserData } from './actions';
import { openNotification } from "../../../utils/helpers";

export function* fetchUserDataRequest() {
    try {
        //@ts-ignore
        const data = yield call(userApi.getMe);
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
        //@ts-ignore
        const data = yield call(userApi.signUp, payload);
        yield put(setUserData(data));
    } catch (err) {
        yield console.log(err);
    }
}

export function* fetchUserLoginRequest({ payload }: FetchUserLoginType) {
    try {
        const { data } = yield call(userApi.signIn, payload);

        openNotification({
            title: 'Отлично!',
            text: 'Авторизация успешна.',
            type: 'success',
        });
        //@ts-ignore
        window.axios.defaults.headers.common["token"] = token;
        window.localStorage["token"] = data.token;
        yield put(setUserData(data));
        yield put(setIsAuth(true));
    } catch (err) {
        if (err) {
            openNotification({
                title: "Ошибка при авторизации",
                text: "Неверный логин или пароль",
                type: "error"
            });
        }
    }
}

export function* fetchFindUserRequest({ payload }: FetchFindUserType) {
    try {
        //@ts-ignore
        const data = yield call(userApi.findUsers, payload);
        yield put(setUserData(data));
    } catch (err) {
        yield console.log(err);
    }
}

export function* UserSaga() {
    yield takeLatest(UserActionType.FETCH_USER_DATA, fetchUserDataRequest);
    yield takeLatest(UserActionType.FETCH_USER_REGISTRATION, fetchUserRegistrationRequest);
    yield takeLatest(UserActionType.FETCH_USER_LOGIN, fetchUserLoginRequest);
}

