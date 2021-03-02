import { combineReducers } from "redux";
import userReducer from './ducks/user/reducer';

export const rootReducers = combineReducers({
    userReducer
});