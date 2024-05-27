import QRCode from "qrcode";
import { createSignal } from "solid-js";
import "/src/assets/css/App.css";

function QrGen(props) {
	const transaction = props.transaction;
	const [qr, setqr] = createSignal("");
	QRCode.toDataURL(transaction, {
		margin: 0,
		width: 280,
		errorCorrectionLevel: "H",
		version: 10,
	}) //example of sha256 encryption(Date+iduser+idpayment+onetimecode)
		.then(setqr)
		.catch((err) => {
			console.error(err);
		});
	return (
		<>
			<span className="bg-white shadow-lg rounded-lg p-5">
				<img src={qr()}></img>
			</span>
		</>
	);
}

export default QrGen;
