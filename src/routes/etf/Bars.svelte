<script>
	import { onMount } from 'svelte';
	import { barDataStore, clickedTickers } from './store';

	let chart;
	let chartId = 'etf-bar-graph';
	let filteredBarData;

	$: filteredBarData = {
		categories: $barDataStore.categories.filter((category) => $clickedTickers.has(category)),
		data: $barDataStore.data.filter((_, index) =>
			$clickedTickers.has($barDataStore.categories[index])
		)
	};

	$: console.log(filteredBarData);

	async function initializeChart() {
		if (typeof window !== 'undefined') {
			const ApexCharts = (await import('apexcharts')).default;
			const chartElement = document.getElementById(chartId);
			if (!chartElement) return;

			chart = new ApexCharts(chartElement, {
				chart: {
					type: 'bar',
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
				yaxis: { show: false },
				grid: { show: false },
				tooltip: { enabled: false },
				dataLabels: {
					enabled: true
				},
				plotOptions: {
					bar: {
						horizontal: false,
						dataLabels: { position: 'top' }
					}
				}
			});
			await chart.render();
			updateChart();
		}
	}

	function updateChart() {
		if (filteredBarData && chart) {
			chart.updateOptions({
				series: [
					{
						name: 'Data Series',
						data: filteredBarData.data
					}
				],
				xaxis: {
					categories: filteredBarData.categories
				}
			});
		}
	}

	$: {
		if (chart && filteredBarData) {
			updateChart();
		}
	}

	onMount(() => {
		initializeChart();
	});
</script>

<div class="h-full w-full"><div id={chartId}></div></div>
