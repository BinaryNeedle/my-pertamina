import { Show } from "solid-js";
import "/src/assets/css/App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default (props) => (
	<>
		{/* <Show when={data.loading}> */}
		<Navbar />
		{/* </Show> */}
		<main className="container mx-auto">{props.children}</main>
		{/* <Show when={data.loading}> */}
		<Footer />
		{/* </Show> */}
	</>
);
