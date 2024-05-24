import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
import MainLayout from "../layouts/main";

import pertaminaLogo from "/src/assets/img/pertamina_logo.png";
import QRCode from "qrcode";

function Dashboard() {
	const [qr, setqr] = createSignal("");
	QRCode.toDataURL(
		"2b2ee9d8c90760c616eb9eef56434dd9d323b6ed449204fdc6282b54ebc5d8ff",
		{ margin: 0, width: 280 }
	) //example of sha256 encryption(Date+iduser+idpayment+onetimecode)
		.then(setqr)
		.catch((err) => {
			console.error(err);
		});
	const [dataCount, setDataCount] = createSignal(0);
	// when pulling data from api, the setDataCount must be set to counting total data table
	const [marginFooter, setMarginFooter] = createSignal("");
	if (dataCount() >= 3) {
		setMarginFooter("mt-10 mb-5");
	} else {
		setMarginFooter("mt-10 mb-20");
	}
	return (
		<>
			<MainLayout showNavbar={true} showFooter={true}>
				<section className="container mx-auto px-8 mt-8 relative">
					<section className="flex justify-center mt-10">
						{/* <section className="flex flex-col justify-center items-center me-10">
							<section className="bg-white shadow-lg px-7 py-4">
								<span>Balance My Pertamina</span>
								<section className="flex items-center">
									<span className="pe-3">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-cash-stack"
											viewBox="0 0 16 16"
										>
											<path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
											<path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
										</svg>
									</span>
									<span className="pe-3">Rp. 100,000</span>
								</section>
								<section className="flex">
									<A
										href="/topup"
										className="flex flex-col items-center px-10 py-2 my-2 dark:bg-gray-900 text-white"
									>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-plus-circle"
												viewBox="0 0 16 16"
											>
												<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
												<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
											</svg>
										</span>
										Top Up
									</A>
									<A
										href="/history"
										className="flex flex-col items-center px-10 py-2 my-2 dark:bg-gray-900 text-white"
									>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-clock-history"
												viewBox="0 0 16 16"
											>
												<path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
												<path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
												<path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
											</svg>
										</span>
										History
									</A>
								</section>
							</section>
						</section> */}
						<span className="bg-white shadow-lg rounded-lg p-5">
							<img src={qr()}></img>
						</span>
					</section>
					<section className={marginFooter()}>
						<div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
							<table className="w-full text-sm text-left rtl:text-right text-gray-500">
								<thead className="text-xs text-gray-700 uppercase">
									<tr>
										<th scope="col" className="px-6 py-3">
											No
										</th>
										<th scope="col" className="px-6 py-3">
											Id Transaksi
										</th>
										<th scope="col" className="px-6 py-3">
											Nominal
										</th>
										<th scope="col" className="px-6 py-3">
											Jadwal Transaksi
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className="bg-white border-b border-gray-700 hover:bg-gray-50">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
										>
											1
										</th>
										<td className="px-6 py-4">Apple MacBook Pro 17"</td>
										<td className="px-6 py-4">$2999</td>
										<td className="px-6 py-4">3.0 lb.</td>
									</tr>
									{/* <tr className="bg-white border-b border-gray-700 hover:bg-gray-50">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
										>
											2
										</th>
										<td className="px-6 py-4">Microsoft Surface Pro</td>
										<td className="px-6 py-4">$1999</td>
										<td className="px-6 py-4">1.0 lb.</td>
									</tr>
									<tr className="bg-white border-b border-gray-700 hover:bg-gray-50">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
										>
											3
										</th>
										<td className="px-6 py-4">Magic Mouse 2</td>
										<td className="px-6 py-4">$99</td>
										<td className="px-6 py-4">0.2 lb.</td>
									</tr>
									<tr className="bg-white border-b border-gray-700 hover:bg-gray-50">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
										>
											4
										</th>
										<td className="px-6 py-4">Apple Watch</td>
										<td className="px-6 py-4">$199</td>
										<td className="px-6 py-4">0.12 lb.</td>
									</tr>
									<tr className="bg-white border-b border-gray-700 hover:bg-gray-50">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
										>
											5
										</th>
										<td className="px-6 py-4">Apple iMac</td>
										<td className="px-6 py-4">$2999</td>
										<td className="px-6 py-4">7.0 lb.</td>
									</tr>
									<tr className="bg-white border-b border-gray-700 hover:bg-gray-50">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
										>
											6
										</th>
										<td className="px-6 py-4">Apple AirPods</td>
										<td className="px-6 py-4">$399</td>
										<td className="px-6 py-4">38 g</td>
									</tr>
									<tr className="bg-white border-b border-gray-700 hover:bg-gray-50">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
										>
											7
										</th>
										<td className="px-6 py-4">iPad Pro</td>
										<td className="px-6 py-4">$699</td>
										<td className="px-6 py-4">1.3 lb.</td>
									</tr>
									<tr className="bg-white border-b border-gray-700 hover:bg-gray-50">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
										>
											8
										</th>
										<td className="px-6 py-4">Magic Keyboard</td>
										<td className="px-6 py-4">$99</td>
										<td className="px-6 py-4">453 g</td>
									</tr>
									<tr className="bg-white border-b border-gray-700 hover:bg-gray-50">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
										>
											9
										</th>
										<td className="px-6 py-4">Apple TV 4K</td>
										<td className="px-6 py-4">$179</td>
										<td className="px-6 py-4">1.78 lb.</td>
									</tr>
									<tr className="bg-white border-b border-gray-700 hover:bg-gray-50">
										<th
											scope="row"
											className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
										>
											10
										</th>
										<td className="px-6 py-4">AirTag</td>
										<td className="px-6 py-4">$29</td>
										<td className="px-6 py-4">53 g</td>
									</tr> */}
								</tbody>
							</table>
						</div>
					</section>
				</section>
			</MainLayout>
		</>
	);
}

export default Dashboard;
