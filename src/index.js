import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { userActions } from "./redux/actions";

import "./styles/index.scss";

store.dispatch(userActions.fetchUserData());
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />,
        </Router>,
    </Provider>,
    document.getElementById("root")
);
