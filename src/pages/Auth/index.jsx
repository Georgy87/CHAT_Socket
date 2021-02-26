import React from "react";
import { Route } from "react-router-dom";

import { LoginForm, RegisterForm } from "../../modules";
import { CheckEmailInfo } from "./CheckEmailInfo";

import "./Auth.scss";

const Auth = () => (
	<section className="auth">
		<div className="auth__content">
			<Route exact path="/signin" component={LoginForm} />
			<Route exact path="/signup" component={RegisterForm} />
			<Route exact path="/signup/verify" render={() => <CheckEmailInfo/>} />
		</div>
	</section>
);

export default Auth;
