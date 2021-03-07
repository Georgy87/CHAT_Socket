import React, { useEffect } from "react";
import { Auth, Home } from "./pages";
import { useSelector } from "react-redux";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";

const App = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    const history = useHistory();

    useEffect(() => {
        if (isAuth) {
            history.push('/');
        }
    }, [isAuth]);

    return (
        <div className="wrapper">
            <Switch>
                <Route
                    exact
                    path={["/signin", "/signup", "/signup/verify"]}
                    component={Auth}
                />
                <Route
                    path="/"
                    render={() => (isAuth ? <Home /> : <Redirect to="/" />)}
                />
            </Switch>
        </div>
    );
};

export default App;
