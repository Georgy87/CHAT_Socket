import { combineReducers } from "redux";
import user from './ducks/user/reducer';
import dialogs from './ducks/dialogs/reducer';
import messages from './ducks/messages/reducer';
import Messages from '../components/Messages/Messages';

export const rootReducers = combineReducers({
    dialogs,
    messages,
    user,
});