if (!localStorage.getItem("reloaded")) {
	// If not, reload the page and set the flag in localStorage
	localStorage.setItem("reloaded", "true");
	location.reload();
} else {
	// If already reloaded, remove the flag from localStorage
	localStorage.removeItem("reloaded");
}
export default () => (
	<>
		<h1>Pages Not Found (code: 404)</h1>
	</>
);
