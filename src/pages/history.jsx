import MainLayout from "../layouts/main";
import { onMount } from "solid-js";
import { Chart, Title, Tooltip, Legend, Colors } from "chart.js";
import { Line } from "solid-chartjs";
function NotFound() {
	onMount(() => {
		Chart.register(Title, Tooltip, Legend, Colors);
	});

	const chartData = {
		labels: [
			"Januari",
			"Februari",
			"Maret",
			"April",
			"Mei",
			"Juni",
			"Juli",
			"Agustus",
			"September",
			"Oktober",
			"November",
			"Desember",
		],
		datasets: [
			{
				label: "Total Fuel",
				data: [4, 6, 3, 5, 3, 3, 7, 8, 10, 8, 9, 10],
				lineTension: 0.4,
			},
		],
	};
	const chartOptions = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: "The total fuel consumption in 2023.",
			},
		},
		maintainAspectRatio: false,
		interaction: {
			intersect: false,
		},
		scales: {
			x: {
				display: true,
				title: {
					display: true,
					text: "Month",
				},
			},
			y: {
				display: true,
				title: {
					display: true,
					text: "Total Fuel",
				},
				suggestedMin: 0,
				suggestedMax: 5,
			},
		},
	};
	return (
		<>
			<MainLayout showNavbar={true} showFooter={true}>
				<section class="container mx-auto px-8 mt-8">
					<span className="bg-white">
						<Line
							data={chartData}
							options={chartOptions}
							width={400}
							height={400}
						/>
					</span>
					<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
						<table class="w-full text-sm text-left rtl:text-right text-gray-500">
							<thead class="text-xs text-gray-700 uppercase bg-gray-50">
								<tr>
									<th scope="col" class="px-6 py-3">
										No
									</th>
									<th scope="col" class="px-6 py-3">
										Id Transaksi
									</th>
									<th scope="col" class="px-6 py-3">
										<div class="flex items-center">
											Nominal
											<a href="#">
												<svg
													class="w-3 h-3 ms-1.5"
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													viewBox="0 0 24 24"
												>
													<path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
												</svg>
											</a>
										</div>
									</th>
									<th scope="col" class="px-6 py-3">
										<div class="flex items-center">
											Tanggal Transaksi
											<a href="#">
												<svg
													class="w-3 h-3 ms-1.5"
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													viewBox="0 0 24 24"
												>
													<path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
												</svg>
											</a>
										</div>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr class="bg-white border-b">
									<th
										scope="row"
										class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
									>
										1
									</th>
									<td class="px-6 py-4">Apple MacBook Pro 17"</td>
									<td class="px-6 py-4">$2999</td>
									<td class="px-6 py-4">Silver</td>
								</tr>
								<tr class="bg-white border-b">
									<th
										scope="row"
										class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
									>
										2
									</th>
									<td class="px-6 py-4">Microsoft Surface Pro</td>
									<td class="px-6 py-4">$1999</td>
									<td class="px-6 py-4">White</td>
								</tr>
								<tr class="bg-white">
									<th
										scope="row"
										class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
									>
										3
									</th>
									<td class="px-6 py-4">Magic Mouse 2</td>
									<td class="px-6 py-4">$99</td>
									<td class="px-6 py-4">Black</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
			</MainLayout>
		</>
	);
}

export default NotFound;
