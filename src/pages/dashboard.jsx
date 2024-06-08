// layout
import MainLayout from "../layouts/main";

// components
import QrGen from "../components/QrGen";
import HistoryTables from "../components/HistoryTables";

function Dashboard() {
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
						<QrGen
							transaction={
								"2b2ee9d8c90760c616eb9eef56434dd9d323b6ed449204fdc6282b54ebc5d8ff"
							}
						/>
					</section>
					<HistoryTables pagination={false} row={10} />
				</section>
			</MainLayout>
		</>
	);
}

export default Dashboard;
