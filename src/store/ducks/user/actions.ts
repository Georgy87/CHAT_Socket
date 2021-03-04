import { FetchFindUserType, FetchUserLoginType, FetchUserRegistrationType, FetchVerifyHash, SetIsAuthType, UserActionType, UserInfo } from "./types";
import { SetUserDataType } from "./types";

export const setUserData = (data: UserInfo): SetUserDataType => {
    return {
        type: UserActionType.SET_USER_DATA,
        payload: data
    }
}

export const setIsAuth = (payload: boolean): SetIsAuthType => {
    return {
        type: UserActionType.SET_IS_AUTH,
        payload
    }
}


export const fetchUserRegistration = (payload: { email: string; fullname: string; password: string }): FetchUserRegistrationType => {
    return {
        type: UserActionType.FETCH_USER_REGISTRATION,
        payload
    }
}

export const fetchUserLogin = (payload: { email: string; password: string }): FetchUserLoginType => {
    return {
        type: UserActionType.FETCH_USER_LOGIN,
        payload
    }
}

export const fetchVerifyHash = (): FetchVerifyHash => {
    return {
        type: UserActionType.FETCH_VERIFY_HASH,
    }
}

export const fetchFindUser = (payload: string): FetchFindUserType => {
    return {
        type: UserActionType.FETCH_FIND_USER,
        payload
    }
}







