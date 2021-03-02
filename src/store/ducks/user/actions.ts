import { SetIsAuthType, UserActionType, UserInfo } from "./types";
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

