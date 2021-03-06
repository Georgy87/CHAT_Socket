

export enum UserActionType {
    SET_USER_DATA = "USER:SET_USER_DATA",
    SET_IS_AUTH = "USER:SET_IS_AUTH",
    FETCH_USER_DATA = "USER:FETCH_USER_DATA",
    FETCH_USER_LOGIN = "USER:FETCH_USER_LOGIN",
    FETCH_USER_REGISTRATION = "USER:FETCH_USER_REGISTRATION",
    FETCH_VERIFY_HASH = "USER:FETCH_VERIFY_HASH",
    FETCH_FIND_USER = "USER:FETCH_FIND_USER",
    SET_FIND_USER = "USER:SET_FIND_USER",
    SET_VERIFY = "USER:SET_VERIFY"
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
    isOnline: boolean;
    avatar?: string;
    id: string;
}

export type UserStateType = {
    data: UserInfo | null;
    token: any;
    isAuth: boolean;
    verify: boolean;
    findUser: UserInfo[] | [];
}

// actions types

export type SetUserDataType = {
    type: UserActionType.SET_USER_DATA;
    payload: UserInfo;
}

export type SetIsAuthType = {
    type: UserActionType.SET_IS_AUTH;
    payload: boolean;
}

export type SetVerifyType = {
    type: UserActionType.SET_VERIFY;
    payload: boolean;
}

export type SetFindUserType = {
    type: UserActionType.SET_FIND_USER;
    payload: UserInfo[];
}

// fetch types

export type FetchUserDataType = {
    type: UserActionType.FETCH_USER_DATA;
}

export type FetchUserRegistrationType = {
    type: UserActionType.FETCH_USER_REGISTRATION,
    payload: { email: string; fullname: string; password: string };
}

export type FetchUserLoginType = {
    type: UserActionType.FETCH_USER_LOGIN,
    payload: { email: string; password: string };
}

export type FetchVerifyHash = {
    type: UserActionType.FETCH_VERIFY_HASH;
    payload: string;
}

export type FetchFindUserType = {
    type: UserActionType.FETCH_FIND_USER;
    payload: string;
}

export type UserActionTypes =
    | SetUserDataType
    | SetIsAuthType
    | FetchUserDataType
    | FetchUserRegistrationType
    | FetchUserLoginType
    | FetchVerifyHash
    | FetchFindUserType
    | SetVerifyType
    | SetFindUserType;
