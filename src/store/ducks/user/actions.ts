import { FetchFindUserType, FetchUserDataType, FetchUserLoginType, FetchUserRegistrationType, FetchVerifyHash, SetIsAuthType, SetVerifyType, UserActionType, UserInfo } from "./types";
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

export const fetchVerifyHash = (payload: string): FetchVerifyHash => {
    return {
        type: UserActionType.FETCH_VERIFY_HASH,
        payload
    }
}

export const setVerifyHash = (payload: boolean): SetVerifyType => {
    return {
        type: UserActionType.SET_VERIFY,
        payload
    }
}

export const fetchFindUser = (payload: string): FetchFindUserType => {
    return {
        type: UserActionType.FETCH_FIND_USER,
        payload
    }
}

export const fetchUserData = (): FetchUserDataType => {
    return {
        type: UserActionType.FETCH_USER_DATA,
    }
}







