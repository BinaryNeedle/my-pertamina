import { Show } from "solid-js";
import "/src/assets/css/App.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const isNotFound = window.location.pathname === "/404";

function MainLayout(props) {
	return (
		<>
			<Navbar />
			{props.children}
			<Footer />
		</>
	);
}

export default MainLayout;
