import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
import pertaminaLogo from "/src/assets/img/pertamina_logo.png";
import { toDataURL } from "qrcode";

const [qr, setqr] = createSignal("");
toDataURL("I am a pony!")
	.then(setqr)
	.catch((err) => {
		console.error(err);
	});

function Dashboard() {
	return (
		<>
			<div class="container mx-auto px-8 mt-8">
				<div class="bg-white drop-shadow-lg rounded-lg h-screen">
					<img src={qr()}></img>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
