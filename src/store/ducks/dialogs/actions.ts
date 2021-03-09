import { UserInfo } from "../user/types";
import { DialogsActionType, DialogsInfoType, FetchCreateDialogType, FetchDialogsType, SetCurrentDialogIdType, SetDialogsType } from "./types";

export const setDialogs = (payload: DialogsInfoType[]): SetDialogsType => {
    return {
        type: DialogsActionType.SET_ITEMS,
        payload
    }
}

export const setCurrentDialogId = (payload: string): SetCurrentDialogIdType => {
    return {
        type: DialogsActionType.SET_CURRENT_DIALOG_ID,
        payload
    }
}


export const fetchDialogs  = (): FetchDialogsType => {
    return {
        type: DialogsActionType.FETCH_DIALOGS,
    }
}

export const fetchCreateDialog = (payload: { partner: string; text: string }): FetchCreateDialogType => {
    return {
        type: DialogsActionType.FETCH_CREATE_DIALOG,
        payload
    }
}

