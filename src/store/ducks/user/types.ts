

export enum UserActionType {
    SET_USER_DATA = "USER:SET_USER_DATA",
    SET_IS_AUTH = "USER:SET_IS_AUTH",
    FETCH_USER_DATA = "USER:FETCH_USER_DATA",
    FETCH_USER_LOGIN = "USER:FETCH_USER_LOGIN",
}

// state types

export type UserInfo = {
    confirmed: boolean;
    last_seen: string;
    _id: string;
    email: string;
    fullname: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    isOnline: boolean;
    id: string;
}

export type UserStateType = {
    data: UserInfo | null;
    token: any;
    isAuth: boolean;
}

// actions types

export type SetUserDataType = {
    type: UserActionType.SET_USER_DATA;
    payload: UserInfo;
}

export type SetIsAuthType = {
    type: UserActionType.SET_IS_AUTH,
    payload: boolean;
}

// fetch types

export type fetchUserDataType = {
    type: UserActionType.FETCH_USER_DATA;
}

export type fetchUserLoginType = {
    type: UserActionType.FETCH_USER_LOGIN,
    payload: { email: string; password: string };
}

export type UserActionTypes =
    SetUserDataType |
    SetIsAuthType |
    fetchUserDataType |
    fetchUserLoginType;
