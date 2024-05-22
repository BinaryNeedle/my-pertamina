import { Show } from "solid-js";
import "/src/assets/css/App.css";
import Footer from "../components/footer";

const isNotFound = window.location.pathname === "/404";

function MainLayout(props) {
	return (
		<>
			test
			{props.children}
		</>
	);
}

export default MainLayout;
