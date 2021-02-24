import React from "react";
import { Auth, Home } from "./pages";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const App = ({isAuth}) => {
    return (
        <div className="wrapper">
            <Route exact path={["/login", "/register", "/signup/verify"]} component={Auth} />
            <Route
                exact
                path="/"
                render={() =>
                    isAuth ? <Home /> : <Redirect to="/login" />
                }
            />
        </div>
    )
}

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
