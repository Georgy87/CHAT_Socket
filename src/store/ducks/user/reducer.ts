import produce, { Draft } from "immer";
import { UserActionType, UserActionTypes, UserStateType } from "./types";

const initialState: UserStateType = {
    data: null,
    token: window.localStorage.token,
    isAuth: false,
    verify: false
};

const userReducer = produce((draftState: Draft<UserStateType>, action: UserActionTypes) => {
    switch (action.type) {
        case UserActionType.SET_USER_DATA:
            draftState.data = action.payload;
            draftState.isAuth = true;
            draftState.token = window.localStorage.token;
            break;
        case UserActionType.SET_IS_AUTH:
            draftState.isAuth = action.payload;
            break;
        case UserActionType.SET_VERIFY:
            draftState.verify = action.payload;
            break;
        default:
            break;
    }
}, initialState);

export default userReducer;



