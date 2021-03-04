import produce, { Draft } from "immer";
import { MessageActionType, MessagesActionTypes, MessageStateType } from "./types";

const initialState: MessageStateType = {
    items: null,
    isLoading: false,
}

const messagesReducer = produce((draftState: Draft<MessageStateType>, action: MessagesActionTypes) => {
    switch (action.type) {
        case MessageActionType.ADD_MESSAGE:
            if (draftState.items) {
                draftState.items = [...draftState.items, action.payload];
            }
            break;
        case  MessageActionType.SET_ITEMS:
            draftState.items = action.payload;
            draftState.isLoading = false;
            break;
        case MessageActionType.SET_IS_LOADING:
            draftState.isLoading = action.payload;
            break;
        case MessageActionType.REMOVE_MESSAGE:
            if (draftState.items) {
                draftState.items = draftState.items.filter(message => message._id !== action.payload);
            }
            break;
        default:
            break;
    }
}, initialState);

export default messagesReducer;