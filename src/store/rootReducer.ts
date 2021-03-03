import { combineReducers } from "redux";
import userReducer from './ducks/user/reducer';
import dialogsReducer from './ducks/dialogs/reducer';
import messagesReducer from './ducks/messages/reducer';

export const rootReducers = combineReducers({
    userReducer,
    dialogsReducer,
    messagesReducer
});