import { onMount, createSignal } from "solid-js";
import { Chart, Title, Tooltip, Legend, Colors } from "chart.js";
import { Line } from "solid-chartjs";

function HistoryChart(props) {
	const chartMonth = props.chartMonth;
	const chartFuel = props.chartFuel;

	onMount(() => {
		Chart.register(Title, Tooltip, Legend, Colors);
	});

	const chartData = {
		labels: chartMonth,
		datasets: [
			{
				label: "Total Fuel",
				data: chartFuel,
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
			<span className="">
				<Line
					data={chartData}
					options={chartOptions}
					width={400}
					height={400}
				/>
			</span>
		</>
	);
}

export default HistoryChart;
