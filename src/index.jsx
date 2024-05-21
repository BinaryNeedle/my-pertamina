/* @refresh reload */
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route, Navigate } from "@solidjs/router";

import "./assets/css/index.css";
import App from "./App";
const Signin = lazy(() => import("./pages/signin"));
const Signup = lazy(() => import("./pages/signup"));
const ForgotPw = lazy(() => import("./pages/forgotpw"));
const ResetPw = lazy(() => import("./pages/resetpw"));
const Testing = lazy(() => import("./pages/testing"));
const NotFound = lazy(() => import("./pages/notFound"));

const root = document.getElementById("root");

render(
	() => (
		<Router root={App}>
			<Route path="/" component={Signin} />
			<Route path="/signup" component={Signup} />
			<Route path="/forgotpw" component={ForgotPw} />
			<Route path="/resetpw" component={ResetPw} />
			<Route path="/testing" component={Testing} />
			<Route path="/404" component={NotFound} />
			<Route path="/*" component={() => <Navigate href={"/404"} />} />
		</Router>
	),
	root
);
