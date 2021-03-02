import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

import { rootSaga } from "./sagas";
import { rootReducers } from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);