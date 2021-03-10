
import {  AppStateType } from "../../store";

export const selectUser = (state: AppStateType) => state.user;
export const selectUserData = (state: AppStateType) => selectUser(state)?.data;
export const selectFindUser = (state: AppStateType) => state.user.findUser;




