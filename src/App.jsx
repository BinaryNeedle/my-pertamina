import { Show, lazy } from "solid-js";
import { Router, Route, Navigate } from "@solidjs/router";
import "/src/assets/css/App.css";

import MainLayout from "./layouts/main";

const Signin = lazy(() => import("./pages/SignIn"));
const Signup = lazy(() => import("./pages/SignUp"));
const ForgotPw = lazy(() => import("./pages/ForgotPw"));
const ResetPw = lazy(() => import("./pages/ResetPw"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Testing = lazy(() => import("./pages/Testing"));
const Profile = lazy(() => import("./pages/Profile"));
const History = lazy(() => import("./pages/History"));
const NotFound = lazy(() => import("./pages/NotFound"));

const isNotFound = window.location.pathname === "/404";

function App() {
	return (
		<Router root={MainLayout}>
			<Route path="/" component={Signin} />
			<Route path="/signup" component={Signup} />
			<Route path="/forgotpw" component={ForgotPw} />
			<Route path="/resetpw" component={ResetPw} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/profile" component={Profile} />
			<Route path="/history" component={History} />
			<Route path="/testing" component={Testing} />
			<Route path="/*404" component={NotFound} />
		</Router>
		// <Router>
		// 	<Route path="/" component={() => <Navbar/> {Signin} <Footer/>)} />
		// 	<Route path="/*404" component={() => {NotFound})} />
		// </Router>
	);
}

export default App;
