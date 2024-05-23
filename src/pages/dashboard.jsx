import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
import MainLayout from "../layouts/main";

import pertaminaLogo from "/src/assets/img/pertamina_logo.png";
import QRCode from "qrcode";

const [qr, setqr] = createSignal("");
QRCode.toDataURL(
	"2b2ee9d8c90760c616eb9eef56434dd9d323b6ed449204fdc6282b54ebc5d8ff",
	{ margin: 0, width: 240 }
) //example of sha256 encryption(Date+iduser+idpayment+onetimecode)
	.then(setqr)
	.catch((err) => {
		console.error(err);
	});

function Dashboard() {
	return (
		<>
			<MainLayout showNavbar={true} showFooter={true}>
				<section class="container mx-auto px-8 mt-8">
					<section className="flex justify-center">
						<span className="bg-white drop-shadow-lg rounded-l-lg ">
							Balance
						</span>
						<span className="bg-white drop-shadow-lg rounded-r-lg ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-cash-stack"
								viewBox="0 0 16 16"
							>
								<path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
								<path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
							</svg>
						</span>
					</section>
					<section class="flex justify-center mt-10">
						<span className="bg-white drop-shadow-lg rounded-lg p-5">
							<img src={qr()}></img>
						</span>
					</section>
				</section>
			</MainLayout>
		</>
	);
}

export default Dashboard;
