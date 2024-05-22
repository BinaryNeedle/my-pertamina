import { Show, lazy } from "solid-js";
import { Router, Route, Navigate } from "@solidjs/router";
import "/src/assets/css/App.css";

import MainLayout from "./layouts/main";

const Signin = lazy(() => import("./pages/signin"));
const Signup = lazy(() => import("./pages/signup"));
const ForgotPw = lazy(() => import("./pages/forgotpw"));
const ResetPw = lazy(() => import("./pages/resetpw"));
const Testing = lazy(() => import("./pages/testing"));
const NotFound = lazy(() => import("./pages/notFound"));

const isNotFound = window.location.pathname === "/404";

function App() {
	return (
		<Router root={MainLayout}>
			<Route path="/" component={Signin} />
			<Route path="/signup" component={Signup} />
			<Route path="/forgotpw" component={ForgotPw} />
			<Route path="/resetpw" component={ResetPw} />
			<Route path="/testing" component={Testing} />
			<Route path="/*404" component={NotFound} />
		</Router>
	);
}

export default App;
