<script>
	import { onMount } from 'svelte';
	import { transactionStore, clickedTickers } from './store';
	let chart;
	let chartId = 'etf-line-graph';

	let FilteredData = {};
	let xAxisCategories = [];

	$: console.log($clickedTickers);

	$: {
		const groupedData = {};
		const allDates = new Set();
		$transactionStore
			.filter((item) => $clickedTickers.has(item.stock))
			.forEach((item) => {
				const { date, marketValue, stock } = item;

				allDates.add(
					new Date(date).toLocaleString('en-us', {
						month: 'short',
						day: '2-digit',
						timeZone: 'UTC'
					})
				);

				if (!groupedData[stock]) {
					groupedData[stock] = [];
				}

				groupedData[stock].push({
					date: new Date(date).toLocaleDateString('en-us', {
						month: 'short',
						day: '2-digit',
						timeZone: 'UTC'
					}),
					marketValue: Number(marketValue)
				});
			});
		xAxisCategories = Array.from(allDates).sort((a, b) => new Date(a) - new Date(b));
		FilteredData = Object.entries(groupedData).map(([stock, data]) => ({
			name: stock,
			data: xAxisCategories.map((date) => data.find((d) => d.date === date)?.marketValue || 0)
		}));
	}

	async function initializeChart() {
		if (typeof window !== 'undefined') {
			const ApexCharts = (await import('apexcharts')).default;
			const chartElement = document.getElementById(chartId);
			if (!chartElement) return;

			chart = new ApexCharts(chartElement, {
				chart: {
					type: 'line',
					height: '100%',
					width: '100%',
					toolbar: { show: false },
					margin: 0,
					padding: 0
				},
				title: { text: '' },
				series: [],
				xaxis: {
					categories: []
				},
				yaxis: { show: true, labels: { formatter: (value) => `$${Math.round(value)}` } },
				grid: { show: false },
				tooltip: { enabled: false },
				dataLabels: {
					enabled: false
				}
			});
			await chart.render();
			updateChart();
		}
	}

	function updateChart() {
		if (chart && FilteredData) {
			chart.updateOptions({
				series: FilteredData,
				xaxis: {
					categories: xAxisCategories
				}
			});
		}
	}

	$: {
		if (chart && FilteredData) {
			updateChart();
		}
	}

	onMount(() => {
		initializeChart();
	});
</script>

<div class="container h-full w-full"><div id={chartId}></div></div>

<style></style>
