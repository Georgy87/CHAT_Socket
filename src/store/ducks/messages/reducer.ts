import produce, { Draft } from "immer";
import { MessageStateType } from "./types";

const initialState: MessageStateType = {
    items: null,
    isLoading: false,
}

const messagesReducer = produce((draftState: Draft<MessageStateType>, action: any) => {
    switch (action.type) {
        case "MESSAGES:ADD_MESSAGE":
            if (draftState.items) {
                draftState.items = [...draftState.items, action.payload];
            }
            break;
        case "MESSAGES:SET_ITEMS":
            draftState.items = action.payload;
            draftState.isLoading = false;
            break;
        case "MESSAGES:SET_IS_LOADING":
            draftState.isLoading = action.payload;
            break;
        case "MESSAGES:REMOVE_MESSAGE":
            if (draftState.items) {
                draftState.items = draftState.items.filter(message => message._id !== action.payload);
            }
            break;
        default:
            break;
    }
}, initialState);

export default messagesReducer;