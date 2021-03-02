import produce, { Draft } from "immer";

export type UserStateType = {
    data: null;
    token: any;
    isAuth: boolean;
}

const initialState: UserStateType = {
    data: null,
    token: window.localStorage.token,
    isAuth: false
};

const userReducer = produce((draftState: Draft<UserStateType>, action: any) => {
    switch (action.type) {
        case "USER:SET_DATA":
            draftState.data = action.payload;
            draftState.isAuth = true;
            draftState.token = window.localStorage.token;
            break;
        case "USER:SET_IS_AUTH":
            draftState.isAuth = action.payload;
            break;
        default:
            break;
    }
}, initialState);

export default userReducer;



