import { Show } from "solid-js";
import "/src/assets/css/App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const isNotFound = window.location.pathname === "/404";
export default (props) => (
	<>
		<Show when={!isNotFound}>
			<Navbar />
		</Show>
		<main className="container mx-auto">
			{props.children}
			{!isNotFound}
			{window.location.pathname}
		</main>
		<Show when={!isNotFound}>
			<Footer />
		</Show>
	</>
);
