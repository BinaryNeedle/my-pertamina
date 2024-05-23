import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
import pertaminaLogo from "/src/assets/img/pertamina_logo.png";
import { toDataURL } from "qrcode";

const [qr, setqr] = createSignal("");
toDataURL("2b2ee9d8c90760c616eb9eef56434dd9d323b6ed449204fdc6282b54ebc5d8ff") //example of sha256 encryption(Date+iduser+idpayment+onetimecode)
	.then(setqr)
	.catch((err) => {
		console.error(err);
	});

function Dashboard() {
	return (
		<>
			<section class="container mx-auto px-8 mt-8">
				<section class="bg-white drop-shadow-lg rounded-lg">
					<img src={qr()}></img>
				</section>
				<section></section>
			</section>
		</>
	);
}

export default Dashboard;
