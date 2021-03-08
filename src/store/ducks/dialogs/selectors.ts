import { AppStateType } from "../../store";

export const selectDialogs = (state: AppStateType) => state.dialogs;
export const selectDialogItems = (state: AppStateType) => selectDialogs(state).items;
export const selectCurrentDialogId = (state: AppStateType) => selectDialogs(state).currentDialogId;