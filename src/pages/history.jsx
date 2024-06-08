import MainLayout from "../layouts/main";
import HistoryChart from "../components/HistoryChart";
import HistoryTables from "../components/HistoryTables";

function History() {
	return (
		<>
			<MainLayout showNavbar={true} showFooter={true}>
				<section class="container mx-auto px-8 mt-8">
					<HistoryChart
						chartMonth={[
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
						]}
						chartFuel={[4, 6, 3, 5, 3, 3, 7, 8, 10, 8, 9, 10]}
					/>
					<HistoryTables pagination={true} row={10} />
				</section>
			</MainLayout>
		</>
	);
}

export default History;
