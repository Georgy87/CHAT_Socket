import { call, put, takeLatest } from "redux-saga/effects";
import { FetchMessagesType, FetchRemoveMessageByIdType, FetchSendMessageType, MessageActionType } from "./types";
import { messagesApi } from "../../../services/api/messagesApi";
import { setMessages, setIsLoading, removeMessageById } from './actions';

export function* fetchSendMessageRequest({ payload }: FetchSendMessageType) {
    try {
        yield call(messagesApi.send, payload);
    } catch (error) {
        yield console.log(error);
    }
}

export function* fetchRemoveMessageByIdRequest({ payload }: FetchRemoveMessageByIdType) {
    try {
        yield call(messagesApi.removeById, payload);
        yield put(removeMessageById(payload));
    } catch (error) {
        yield console.log(error);
    }
}

export function* fetchMessagesRequest({ payload }: FetchMessagesType) {
    try {
        yield setIsLoading(true);
        const { data } = yield call(messagesApi.getAllByDialogId, payload);
        yield put(setMessages(data));
        yield setIsLoading(false);
    } catch (error) {
        yield console.log(error);
    }
}

export function* MessagesSaga() {
    yield takeLatest(MessageActionType.FETCH_SEND_MESSAGE, fetchSendMessageRequest);
    yield takeLatest(MessageActionType.FETCH_REMOVE_MESSAGE_BY_ID, fetchRemoveMessageByIdRequest);
    yield takeLatest(MessageActionType.FETCH_MESSAGES, fetchMessagesRequest);
}