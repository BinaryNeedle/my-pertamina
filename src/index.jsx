/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./assets/css/index.css";
import App from "./App";
import Home from "./pages/home";
import Testing from "./pages/testing";
import NotFound from "./pages/notFound";

const root = document.getElementById("root");

render(
	() => (
		<Router root={App}>
			<Route path="/" component={Home} />
			<Route path="/testing" component={Testing} />
			<Route path="/*404" component={NotFound} />
		</Router>
	),
	root
);
