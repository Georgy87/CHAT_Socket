
import { all } from "redux-saga/effects";
import { UserSaga } from "./ducks/user/saga";

export function* rootSaga() {
    yield all([UserSaga]);
}