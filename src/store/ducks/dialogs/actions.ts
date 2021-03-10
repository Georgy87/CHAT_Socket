import { UserInfo } from "../user/types";
import { DialogsActionType, DialogsInfoType, FetchCreateDialogType, FetchCreateGroupDialogType, FetchDialogsType, SetCurrentDialogIdType, SetCurrentStatusType, SetDialogsType } from "./types";

// ACTIONS

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

export const setCurrentStatus = (payload: boolean): SetCurrentStatusType => {
    return {
        type: DialogsActionType.SET_CURRENT_STATUS,
        payload
    }
}

// FETCH

export const fetchDialogs = (): FetchDialogsType => {
    return {
        type: DialogsActionType.FETCH_DIALOGS,
    }
}

export const fetchCreateDialog = (payload: { partner: string; text: string; }): FetchCreateDialogType => {
    return {
        type: DialogsActionType.FETCH_CREATE_DIALOG,
        payload
    }
}

export const fetchCreateGroupDialog = (payload: { partner: string; text: string; nameGroup: string }): FetchCreateGroupDialogType => {
    return {
        type: DialogsActionType.FETCH_CREATE_GROUP_DIALOG,
        payload
    }
}

