import { UserInfo } from "../user/types";

export enum DialogsActionType {
    SET_ITEMS = "DIALOGS:SET_ITEMS",
    SET_CURRENT_DIALOG_ID = "DIALOGS:SET_CURRENT_DIALOG_ID",
    FETCH_DIALOGS = "DIALOGS:FETCH_DIALOGS",
    FETCH_CREATE_DIALOG = "DIALOGS:FETCH_CREATE_DIALOG",
    SET_CURRENT_STATUS = "DIALOGS:SET_CURRENT_STATUS",
    FETCH_CREATE_GROUP_DIALOG = "DIALOGS:FETCH_CREATE_GROUP_DIALOG",
    SET_DIALOG_NAME = "DIALOGS:SET_DIALOG_NAME",
    FETCH_DIALOG_BY_ID = "DIALOGS:FETCH_DIALOG_BY_ID"
}

export enum PartnerOrGroup {
    IS_GROUP = "IS_GROUP",
    IS_ONE_PARTNER = "IS_ONE_PARTNER",
}

// state types

export type LastMessageType = {
    unread: boolean;
    _id: string;
    text: string;
    dialog: string;
    user: UserInfo;
    createdAt: string;
    updatedAt: string;
}

// export type DialogueParticipantsType = {
//     confirmed: boolean;
//     last_seen: string;
//     _id: string;
//     email: string;
//     fullname: string;
//     password: string;
//     confirm_hash: string;
//     createdAt: string;
//     updatedAt: string;
//     isOnline: boolean;
//     id: string;
// }

export type DialogsInfoType = {
    _id: string;
    author: UserInfo;
    partner: UserInfo[];
    createdAt: string;
    updatedAt: string;
    dialogName: string;
    isOnePartnerOrGroup: string;
    lastMessage: LastMessageType;
}

export type DialogsStateType = {
    items: DialogsInfoType[];
    currentDialogId: string;
    isLoading: boolean;
    isPartnerOrGroup: string;
    dialogName: string;
}

// action types

export type SetDialogsType = {
    type: DialogsActionType.SET_ITEMS;
    payload: DialogsInfoType[];
}

export type SetCurrentDialogIdType = {
    type: DialogsActionType.SET_CURRENT_DIALOG_ID;
    payload: string;
}

export type SetCurrentStatusType = {
    type: DialogsActionType.SET_CURRENT_STATUS;
    payload: string;
}

export type SetDialogNameType = {
    type: DialogsActionType.SET_DIALOG_NAME;
    payload: string;
}

// fetch types

export type FetchDialogsType = {
    type: DialogsActionType.FETCH_DIALOGS;
}

export type FetchCreateDialogType = {
    type: DialogsActionType.FETCH_CREATE_DIALOG;
    payload: { partner: string; text: string; };
}

export type FetchCreateGroupDialogType = {
    type: DialogsActionType.FETCH_CREATE_GROUP_DIALOG;
    payload: { partner: string; text: string; nameGroup: string; };
}

export type FetchDialogByIdType = {
    type: DialogsActionType.FETCH_DIALOG_BY_ID;
    payload: string;
}

export type DialogsActionTypes = SetDialogsType | SetCurrentDialogIdType | FetchDialogsType | SetCurrentStatusType | SetDialogNameType;








