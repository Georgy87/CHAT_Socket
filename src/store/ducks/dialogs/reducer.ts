
import produce, { Draft } from "immer";

import { DialogsActionType, DialogsActionTypes, DialogsStateType } from "./types";

const initialState: DialogsStateType = {
    items: [],
    currentDialogId: window.location.pathname.split("dialog/")[1],
    isLoading: false,
    isPartnerOrGroup: false,
    dialogName: '',
}

const dialogsReducer = produce((draftState: Draft<DialogsStateType>, action: DialogsActionTypes) => {
    switch (action.type) {
        case DialogsActionType.SET_ITEMS:
            draftState.items = action.payload;
            break;
        case DialogsActionType.SET_CURRENT_DIALOG_ID:
            draftState.currentDialogId = action.payload;
            // draftState.items.forEach((el) => {
            //     if (el._id === action.payload) {
            //         console.log(el.dialogName);
            //         return  draftState.dialogName = el.dialogName;
            //     }
            // });
            break;
        case DialogsActionType.SET_CURRENT_STATUS:
            draftState.isPartnerOrGroup = action.payload;
            break;
        case DialogsActionType.SET_DIALOG_NAME:
            draftState.dialogName = action.payload;
            break;
        default:
            break;
    }
}, initialState);

export default dialogsReducer;