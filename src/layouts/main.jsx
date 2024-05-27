import { Show } from "solid-js";
import "/src/assets/css/App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout(props) {
	const showNavbar = props.showNavbar;
	const showFooter = props.showFooter;

	return (
		<>
			{showNavbar && <Navbar />}
			<div className="main-content">{props.children}</div>
			{showFooter && <Footer />}
		</>
	);
}

export default MainLayout;
