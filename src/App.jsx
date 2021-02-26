import React from "react";
import { Auth, Home } from "./pages";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";

const App = props => {
    const { isAuth } = props;
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
                    render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
                />
            </Switch>
        </div>
    );
};

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
