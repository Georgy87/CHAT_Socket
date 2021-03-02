import { UserInfo } from "../user/types";

export enum DialogsActionType {
    SET_ITEMS = "DIALOGS:SET_ITEMS",
    SET_CURRENT_DIALOG_ID = "DIALOGS:SET_CURRENT_DIALOG_ID",
    FETCH_DIALOGS = "DIALOGS:FETCH_DIALOGS"
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

export type DialogueParticipantsType = {
    confirmed: boolean;
    last_seen: string;
    _id: string;
    email: string;
    fullname: string;
    password: string;
    confirm_hash: string;
    createdAt: string;
    updatedAt: string;
    isOnline: boolean;
    id: string;
}

export type DialogsInfoType = {
    _id: string;
    author: DialogueParticipantsType;
    partner: DialogueParticipantsType;
    createdAt: string;
    updatedAt: string;
    lastMessage: LastMessageType;
}

export type DialogsStateType = {
    items: DialogsInfoType[];
    currentDialogId: string;
    isLoading: boolean;
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

// fetch types

export type FetchDialogsType = {
    type: DialogsActionType.FETCH_DIALOGS;
}

export type DialogsActionTypes = SetDialogsType | SetCurrentDialogIdType | FetchDialogsType;








