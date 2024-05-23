import { A } from "@solidjs/router";
import pertaminaLogo from "/src/assets/img/pertamina_logo.png";
// remove navbar and footer display in css level
document.getElementById("navbar").style.display = "none";
document.getElementById("footer").style.display = "none";
function ResetPw() {
	return (
		<>
			<section class="container mx-auto p-8 flex items-center h-screen">
				<section class="mx-auto max-w-md">
					<section class="bg-gradient-to-b from-[#edf2f4] from-10% via-white via-30% to-white to-60% rounded-lg shadow p-7 border-4 border-x-white border-b-white border-t-[#edf2f4]">
						<span className="flex justify-center pt-8">
							<img src={pertaminaLogo} alt="Pertamina Logo" className="w-16" />
						</span>
						<section class="pt-8 font-bold text-black text-center text-xl tracking-widest uppercase">
							Welcome!
						</section>
						<section class="text-center mb-5 mt-3">
							Please enter your new password.
						</section>
						<section class="text-center mt-4 flex items-center">
							<section class="border-t border-4 border-gray-400 flex-grow"></section>
						</section>
						<form class="bg-grey-lightest py-3">
							{/* {{ csrf_field() }} */}

							<section class="mb-3">
								<label htmlFor="password">Password</label>
								<input
									class="border w-full p-3 rounded-lg"
									name="password"
									type="password"
									id="password"
									placeholder="* * * * * * * * * *"
								/>
							</section>
							<section class="mb-6">
								<label htmlFor="confirmPassword">Confirm Password</label>
								<input
									class="border w-full p-3 rounded-lg"
									name="confirmPassword"
									type="Password"
									id="confirmPassword"
									placeholder="* * * * * * * * * *"
								/>
							</section>
							<section class="flex">
								<button class="bg-black rounded-lg hover:bg-primary-dark w-full p-4 text-sm text-white uppercase font-bold tracking-wider">
									Submit
								</button>
							</section>
						</form>

						<section class="border-t px-1 py-6">
							<section class="flex justify-between">
								<A
									href="/signup"
									class="font-bold text-primary hover:text-primary-dark no-underline"
								>
									Don't have an account?
								</A>
								<p className="px-2">|</p>
								<A
									href="/"
									class="text-grey-darkest hover:text-black no-underline"
								>
									Already have an account?
								</A>
							</section>
						</section>
					</section>
				</section>
			</section>
		</>
	);
}

export default ResetPw;
