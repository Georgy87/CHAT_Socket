
import produce, { Draft } from "immer";
import { DialogsStateType } from "./types";

const initialState: DialogsStateType = {
    items: [],
    currentDialogId: window.location.pathname.split("dialog/")[1],
    isLoading: false,
}

const dialogsReducer = produce((draftState: Draft<DialogsStateType>, action: any) => {
    switch (action.type) {
        case "DIALOGS:SET_ITEMS":
            draftState.items = action.payload;
            break;
        case "DIALOGS:SET_CURRENT_DIALOG_ID":
            draftState.currentDialogId = action.payload;
            break;
        default:
            break;
    }
}, initialState);

export default dialogsReducer;