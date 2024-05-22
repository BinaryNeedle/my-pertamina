// remove navbar and footer display in css level
document.getElementById("navbar").style.display = "none";
document.getElementById("footer").style.display = "none";

function NotFound() {
	return (
		<>
			<h1>Pages Not Found (code: 404)</h1>
		</>
	);
}

export default NotFound;
