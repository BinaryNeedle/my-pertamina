import { A } from "@solidjs/router";
import MainLayout from "../layouts/main";
// import "/src/assets/css/login.css";
import pertaminaLogo from "/src/assets/img/pertamina_logo.png";
// remove navbar and footer display in css level

function Signin() {
	return (
		<>
			<MainLayout showNavbar={false} showFooter={false}>
				<section class="container mx-auto p-8 flex items-center h-screen">
					<section class="mx-auto max-w-md">
						{/* <!-- ... --> */}

						<section class="bg-gradient-to-b from-[#edf2f4] from-10% via-white via-30% to-white to-60% rounded-lg shadow p-7 border-4 border-x-white border-b-white border-t-[#edf2f4]">
							<span className="flex justify-center pt-8">
								<img
									src={pertaminaLogo}
									alt="Pertamina Logo"
									className="w-16"
								/>
							</span>
							<section class="pt-8 font-bold text-black text-center text-xl tracking-widest uppercase">
								Welcome back!
							</section>
							<section class="text-center mb-5 mt-3">
								Please enter your details to sign in.
							</section>
							<section class="flex justify-center">
								<button
									type="button"
									class="flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-3 mx-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-apple"
										viewBox="0 0 16 16"
									>
										<path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
										<path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
									</svg>
								</button>
								<button
									type="button"
									class="flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-3 mx-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-google"
										viewBox="0 0 16 16"
									>
										<path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
									</svg>
								</button>
								<button
									type="button"
									class="flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-3 mx-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
								>
									<svg
										class="w-4 h-4 me-2"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 17"
									>
										<path
											fill-rule="evenodd"
											d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>
							</section>
							<section class="text-center mt-4 flex items-center">
								<section class="border-t border-4 border-gray-400 flex-grow mr-3"></section>
								<p>OR</p>
								<section class="ml-3 border-t border-4 border-gray-400 flex-grow"></section>
							</section>

							<form class="bg-grey-lightest py-3">
								{/* {{ csrf_field() }} */}

								<section class="mb-3">
									<label htmlFor="email">E-Mail Address</label>
									<input
										class="border w-full p-3 rounded-lg"
										name="email"
										type="text"
										id="email"
										placeholder="E-Mail"
									/>
								</section>
								<section class="mb-6">
									<label htmlFor="password">Password</label>
									<input
										class="border w-full p-3 rounded-lg"
										name="password"
										type="password"
										id="password"
										placeholder="* * * * * * * * * *"
									/>
								</section>
								<section class="flex">
									<button class="bg-black rounded-lg hover:bg-primary-dark w-full p-4 text-sm text-white uppercase font-bold tracking-wider">
										Sign in
									</button>
								</section>
							</form>

							<section class="border-t px-8 py-6">
								<section class="flex justify-between">
									<A
										href="/signup"
										class="font-bold text-primary hover:text-primary-dark no-underline"
									>
										Don't have an account?
									</A>
									<p className="px-2">|</p>
									<A
										href="/forgotpw"
										class="text-grey-darkest hover:text-black no-underline"
									>
										Forgot Password?
									</A>
								</section>
							</section>
						</section>
					</section>
				</section>
			</MainLayout>
		</>
	);
}

export default Signin;
