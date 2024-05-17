import "/src/assets/css/App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default (props) => (
	<>
		<Navbar />
		{props.children}
		<Footer />
	</>
);
