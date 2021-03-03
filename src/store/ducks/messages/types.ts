import { UserInfo } from "../user/types";
import { DialogsInfoType } from "../dialogs/types"

// state types

export enum MessageActionType {
    SET_ITEMS = "MESSAGES:SET_ITEMS",
    ADD_MESSAGE = "MESSAGES:ADD_MESSAGE",
    FETCH_ADD_MESSAGE = "MESSAGES:FETCH_ADD_MESSAGE",
    SET_IS_LOADING = "MESSAGES:SET_IS_LOADING",
    REMOVE_MESSAGE = "MESSAGES:REMOVE_MESSAGE",
    FETCH_REMOVE_MESSAGE_BY_ID = "MESSAGES:FETCH_REMOVE_MESSAGE_BY_ID",
    FETCH_SEND_MESSAGE = "FETCH_SEND_MESSAGE",
    FETCH_MESSAGES = "MESSAGES:FETCH_MESSAGES",
}

export type MessageInfoType = {
    unread: boolean;
    _id: string;
    text: string;
    dialog: DialogsInfoType<string>;
    user: UserInfo;
    createdAt: string;
    updatedAt: string;
}

export type MessageStateType = {
    items: MessageInfoType[] | null;
    isLoading: boolean;
}

// actions type

export type SetMessagesType = {
    type: MessageActionType.SET_ITEMS,
    payload: MessageInfoType[],
}

export type AddMessageType = {
    type: MessageActionType.ADD_MESSAGE,
    payload: MessageInfoType;
}

export type SetIsLoadingType = {
    type: MessageActionType.SET_IS_LOADING;
    payload: boolean;
}

export type RemoveMessageByIdType = {
    type: MessageActionType.REMOVE_MESSAGE;
    payload: string;
}

// fetch type

export type FetchSendMessageType = {
    type: MessageActionType.FETCH_SEND_MESSAGE;
    payload: { text: string, dialogId: string };
}

export type FetchRemoveMessageByIdType = {
    type: MessageActionType.FETCH_REMOVE_MESSAGE_BY_ID,
    payload: string;
}

export type FetchMessagesType = {
    type: MessageActionType.FETCH_MESSAGES;
    payload: string;
}

export type MessagesActionTypes =
    | SetMessagesType
    | AddMessageType
    | SetIsLoadingType
    | RemoveMessageByIdType
    | FetchSendMessageType
    | FetchRemoveMessageByIdType
    | FetchMessagesType


















