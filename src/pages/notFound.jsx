import MainLayout from "../layouts/main";

function NotFound() {
	return (
		<>
			<MainLayout showNavbar={false} showFooter={false}>
				<h1>Pages Not Found (code: 404)</h1>
			</MainLayout>
		</>
	);
}

export default NotFound;
