import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { fetchUserData } from "./store/ducks/user/actions";

import "./styles/index.scss";

store.dispatch(fetchUserData());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />,
        </Router>,
    </Provider>,
    document.getElementById("root")
);

