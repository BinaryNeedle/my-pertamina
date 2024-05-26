import { A } from "@solidjs/router";

// image
import pertaminaLogo from "/src/assets/img/pertamina_logo.png";

function Navbar() {
	return (
		<>
			<nav
				id="navbar"
				className="container mx-auto mt-3 py-2 bg-white shadow-lg rounded-lg flex justify-between"
			>
				<section className="flex">
					<A href="/dashboard" class="flex items-center ms-5">
						<img src={pertaminaLogo} alt="Pertamina Logo" className="w-14" />
						<span className="ms-2 text-nowrap">My Pertamina</span>
					</A>
				</section>
				<section className="flex justify-between items-center w-full">
					<ul className="flex  ms-20">
						<li className="px-10">
							<A href="/dashboard">Dashboard</A>
						</li>
						<li className="px-10">
							<A href="/history">History</A>
						</li>
						<li className="px-10">
							<A href="/profile">Profile</A>
						</li>
					</ul>
					<section className="flex justify-center pe-5">
						<A href="https://x.com/" class="px-10">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-twitter-x"
								viewBox="0 0 16 16"
							>
								<path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
							</svg>
						</A>
						<A href="https://www.instagram.com/" class="px-10">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-instagram"
								viewBox="0 0 16 16"
							>
								<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
							</svg>
						</A>
						<A href="https://www.tiktok.com/" class="px-10">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-tiktok"
								viewBox="0 0 16 16"
							>
								<path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
							</svg>
						</A>
					</section>
				</section>
				<button className="pe-5 md:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						class="bi bi-list"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
						/>
					</svg>
				</button>
			</nav>
		</>
	);
}

export default Navbar;
