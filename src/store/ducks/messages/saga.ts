import { call, put, takeLatest } from "redux-saga/effects";
import { FetchMessagesType, FetchRemoveMessageByIdType, FetchSendMessageType, MessageActionType } from "./types";
import messagesApi from "../../../utils/api/messages";

export function* fetchSendMessageRequest({ payload }: FetchSendMessageType) {
    try {
        yield call(messagesApi.send, payload);
    } catch (error) {
        yield console.log(error);
    }
}

export function* fetchRemoveMessageByIdType({ payload }: FetchRemoveMessageByIdType) {
    try {
        yield call(messagesApi.removeById, payload);
    } catch (error) {
        yield console.log(error);
    }
}

export function* fetchMessages({ payload }: FetchMessagesType) {
    try {
        yield call(messagesApi.getAllByDialogId, payload);
    } catch (error) {
        yield console.log(error);
    }
}

export function* MessagesSaga() {
    yield takeLatest(MessageActionType.FETCH_SEND_MESSAGE, fetchSendMessageRequest);
    yield takeLatest(MessageActionType.FETCH_REMOVE_MESSAGE_BY_ID, fetchRemoveMessageByIdType);
    yield takeLatest(MessageActionType.FETCH_MESSAGES, fetchMessages);
}