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
					<section className="bg-white drop-shadow-lg rounded-lg flex">
						Balance
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
