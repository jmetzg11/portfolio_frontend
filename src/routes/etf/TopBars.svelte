<script>
	import { onMount } from 'svelte';
	import { barDataStore } from './store';
	import { getLineData } from './helpers';

	let chart;
	let chartId = 'etf-bar-graph';
	let barData;
	barDataStore.subscribe((value) => {
		barData = value;
		if (chart) {
			updateChart();
		}
	});

	const series = [
		{
			name: 'Example Series',
			data: []
		}
	];
	const options = {
		chart: {
			type: 'bar',
			height: '100%',
			width: '100%',
			toolbar: { show: false },
			margin: 0,
			padding: 0
		},
		title: {
			text: ''
		},
		series: series,
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
	};

	async function initializeChart() {
		const ApexCharts = (await import('apexcharts')).default;
		const chartElement = document.getElementById(chartId);
		if (!chartElement) return;
		chart = new ApexCharts(chartElement, options);
		chart.render();
	}

	function updateChart() {
		if (barData && chart) {
			chart.updateOptions({
				series: [
					{
						name: 'Data Series',
						data: barData.data
					}
				],
				xaxis: {
					categories: barData.categories
				}
			});
		}
	}

	onMount(() => {
		initializeChart();
	});
</script>

<div class="bar-container"><div id={chartId}></div></div>
<button on:click={getLineData}>get data</button>

<style>
	.bar-container {
		height: 300px;
		width: 500px;
		background-color: pink;
	}
</style>
