import { UserInfo } from "../user/types";
import { DialogsActionType, DialogsInfoType, FetchCreateDialogType, FetchCreateGroupDialogType, FetchDialogsType, SetCurrentDialogIdType, SetCurrentStatusType, SetDialogNameType, SetDialogsType } from "./types";

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

export const setDialogName = (payload: string): SetDialogNameType => {
    return {
        type: DialogsActionType.SET_DIALOG_NAME,
        payload
    }
}

// FETCH

export const fetchDialogs = (payload: string): FetchDialogsType => {
    return {
        type: DialogsActionType.FETCH_DIALOGS,
        payload
    }
}

export const fetchCreateDialog = (payload: { partner: string; text: string; partnerName: string }): FetchCreateDialogType => {
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

