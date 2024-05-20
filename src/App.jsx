import { Show } from "solid-js";
import "/src/assets/css/App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const isNotFound = window.location.pathname === "/404";

function App(props) {
	return (
		<>
			<Show when={!isNotFound}>
				<Navbar />
			</Show>
			{props.children}
			{/* {window.location.pathname} */}
			<Show when={!isNotFound}>
				<Footer />
			</Show>
		</>
	);
}

export default App;
