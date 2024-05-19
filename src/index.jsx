/* @refresh reload */
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./assets/css/index.css";
import App from "./App";
const Login = lazy(() => import("./pages/login"));
const Testing = lazy(() => import("./pages/testing"));
const NotFound = lazy(() => import("./pages/notFound"));

const root = document.getElementById("root");

render(
	() => (
		<Router root={App}>
			<Route path="/" component={Login} />
			<Route path="/testing" component={Testing} />
			<Route path="/*404" component={NotFound} />
		</Router>
	),
	root
);
