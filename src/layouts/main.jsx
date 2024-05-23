import { Show } from "solid-js";
import "/src/assets/css/App.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
