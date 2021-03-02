import { all } from "redux-saga/effects";
import { UserSaga } from "./ducks/user/saga";
import { DialogsSaga } from "./ducks/dialogs/saga";

export function* rootSaga() {
    yield all([UserSaga(), DialogsSaga()]);
}