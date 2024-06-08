import { Show, createSignal } from "solid-js";

function HistoryTable(props) {
	const pagination = props.pagination;
	const row = props.row;
	const [dataCount, setDataCount] = createSignal(0);
	// when pulling data from api, the setDataCount must be set to counting total data table
	const [marginFooter, setMarginFooter] = createSignal("");
	if (dataCount() >= 3) {
		setMarginFooter("mt-10 mb-5");
	} else {
		setMarginFooter("mt-10 mb-20");
	}
	return (
		<section className={marginFooter()}>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
								Tanggal Transaksi
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
	);
}

export default HistoryTable;
