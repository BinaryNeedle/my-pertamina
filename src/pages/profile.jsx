import MainLayout from "../layouts/main";

// image
import pertaminaLogo from "/src/assets/img/pertamina_logo.png";

function Profile() {
	return (
		<>
			<MainLayout showNavbar={true} showFooter={true}>
				<section className="container mx-auto px-8 mt-8">
					<section className="bg-white shadow-lg rounded-lg p-5 mb-10">
						<section className="py-20 border-b-2">
							<p className="my-0 text-2xl font-semibold text-center">Profile</p>
						</section>
						<section className="flex justify-center">
							<section className="mt-10">
								<img
									src={pertaminaLogo}
									className="w-24 h-24 rounded-full border"
									alt="pertamina logo"
								/>
							</section>
						</section>
						<section className="flex justify-center mt-10">
							<form className="flex flex-col">
								<span>
									<label htmlFor="name">Name</label>
									<input
										type="text"
										name="name"
										id="name"
										className="border w-full p-3 rounded-lg"
									/>
								</span>
								<span>
									<label htmlFor="email">Email</label>
									<input
										type="email"
										name="email"
										id="email"
										className="border w-full p-3 rounded-lg"
									/>
								</span>
								<span>
									<label htmlFor="password">Password</label>
									<input
										type="password"
										name="password"
										id="password"
										className="border w-full p-3 rounded-lg"
									/>
								</span>
							</form>
						</section>
					</section>
				</section>
			</MainLayout>
		</>
	);
}

export default Profile;
