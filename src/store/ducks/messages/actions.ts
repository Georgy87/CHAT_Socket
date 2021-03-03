import { AddMessageType, FetchMessagesType, FetchRemoveMessageByIdType, FetchSendMessageType, MessageActionType, MessageInfoType, RemoveMessageByIdType, SetIsLoadingType, SetMessagesType } from "./types"

export const setMessages = (items: MessageInfoType[]): SetMessagesType => {
    return {
        type: MessageActionType.SET_ITEMS,
        payload: items,
    }
}

export const addMessages = (payload: MessageInfoType): AddMessageType => {
    return {
        type: MessageActionType.ADD_MESSAGE,
        payload
    }
}

export const setIsLoading = (payload: boolean): SetIsLoadingType => {
    return {
        type: MessageActionType.SET_IS_LOADING,
        payload
    }
}

export const removeMessageById = (payload: string): RemoveMessageByIdType  => {
    return {
        type: MessageActionType.REMOVE_MESSAGE,
        payload
    }
}


export const fetchSendMessages = (payload: { text: string, dialogId: string }): FetchSendMessageType => {
    return {
        type: MessageActionType.FETCH_SEND_MESSAGE,
        payload
    }
}

export const fetchRemoveMessageById = (payload: string): FetchRemoveMessageByIdType  => {
    return {
        type: MessageActionType.FETCH_REMOVE_MESSAGE_BY_ID,
        payload
    }
}

export const fetchMessages = (payload: string): FetchMessagesType  => {
    return {
        type: MessageActionType.FETCH_MESSAGES,
        payload
    }
}





