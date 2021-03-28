import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { useSelector } from "react-redux";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";

import Auth from './pages/Auth/index';

import "./App.css";

const App = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    const history = useHistory();

    // useEffect(() => {
    //     if (isAuth) {
    //         history.push('/');
    //     }
    // }, [isAuth]);

    return (
        <div className="wrapper">
            <Switch>
                <Route
                    exact
                    path={["/signin", "/signup", "/signup/verify"]}
                    component={Auth}
                />
                <Route
                    exact
                    path={["/","/dialog/:id?"]}
                    render={() => <Home />}
                />
            </Switch>
        </div>
    );
};

export default App;
