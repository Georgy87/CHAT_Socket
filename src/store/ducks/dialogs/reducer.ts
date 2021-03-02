
import produce, { Draft } from "immer";
import { DialogsActionType, DialogsActionTypes, DialogsStateType } from "./types";

const initialState: DialogsStateType = {
    items: [],
    currentDialogId: window.location.pathname.split("dialog/")[1],
    isLoading: false,
}

const dialogsReducer = produce((draftState: Draft<DialogsStateType>, action: DialogsActionTypes) => {
    switch (action.type) {
        case DialogsActionType.SET_ITEMS:
            draftState.items = action.payload;
            break;
        case  DialogsActionType.SET_CURRENT_DIALOG_ID:
            draftState.currentDialogId = action.payload;
            break;
        default:
            break;
    }
}, initialState);

export default dialogsReducer;