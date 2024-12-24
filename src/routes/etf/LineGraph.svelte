<script>
	import { onMount } from 'svelte';
	import { transactionStore, clickedTickers } from './store';
	import { colorMapper } from './helpers';
	let chart;
	let chartId = 'etf-line-graph';

	let FilteredData = {};
	let xAxisCategories = [];
	let lineColors = [];
	let selectedButton = 'value';

	function handleClick(buttonValue) {
		selectedButton = buttonValue;
	}

	$: {
		const groupedData = {};
		const allDates = new Set();
		$transactionStore
			.filter((item) => $clickedTickers.has(item.stock))
			.forEach((item) => {
				const { date, marketValue, unrealizedPlpc, stock } = item;

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
					value: Number(marketValue),
					performance: Number(unrealizedPlpc) * 100
				});
			});
		xAxisCategories = Array.from(allDates).sort((a, b) => new Date(a) - new Date(b));
		FilteredData = Object.entries(groupedData).map(([stock, data]) => ({
			name: stock,
			data: xAxisCategories.map((date) => data.find((d) => d.date === date)?.[selectedButton] || 0)
		}));
	}

	$: lineColors = FilteredData.map((item) => colorMapper[item.name]);

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
					padding: 0,
					legend: { show: false },
					zoom: { enabled: false },
					pan: { enabled: false }
				},
				title: { text: '' },
				series: [],
				xaxis: {
					categories: []
				},
				yaxis: {
					show: true,
					labels: {
						formatter: (value) =>
							selectedButton === 'value' ? `$${Math.round(value)}` : `${Math.round(value)}%`
					}
				},
				grid: { show: false },
				tooltip: {
					enabled: true,
					theme: 'light', // Use a fixed tooltip rendering style
					style: { fontSize: '12px' },
					custom: function ({ series, seriesIndex, dataPointIndex, w }) {
						const colors = w.config.colors;
						const fullSeries = w.config.series.map((s, i) => ({
							name: s.name,
							value: s.data[dataPointIndex],
							color: colors[i]
						}));

						const sortedSeries = fullSeries
							.filter((item) => item.value !== null && item.value !== undefined)
							.sort((a, b) => b.value - a.value);

						const tooltipHTML = sortedSeries
							.map(
								(item) => `
							<div style="display: flex; align-items: center; margin-bottom: 4px;">
								<div style="width: 10px; height: 10px; background: ${item.color}; margin-right: 8px; border-radius: 50%;"></div>
								<div style="display: flex; justify-content: space-between; width: 100%;">
									<span style="font-weight: bold;">${item.name}</span>
									<span>${selectedButton === 'value' ? `$${item.value.toLocaleString()}` : `${item.value.toLocaleString()}%`}</span>
								</div>
							</div>
						`
							)
							.join('');

						return `
							<div style="padding: 8px; background: #fff; border-radius: 4px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">
								${tooltipHTML}
							</div>
						`;
					}
				},

				dataLabels: {
					enabled: false
				},
				legend: { show: false },
				stroke: {
					curve: 'smooth',
					width: 4
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
				},
				colors: lineColors
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

<div class="h-full w-full flex flex-col">
	<div class="flex space-x-4">
		<button
			class={`px-4 py-2 font-semibold text-sm rounded-lg transition-all duration-300 ${selectedButton === 'value' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
			on:click={() => handleClick('value')}>Value</button
		>
		<button
			class={`px-4 py-2 font-semibold text-sm rounded-lg transition-all duration-300 ${selectedButton === 'performance' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
			on:click={() => handleClick('performance')}>Performance</button
		>
	</div>
	<div class="flex-1 relative"><div id={chartId}></div></div>
</div>

<style>
	.apexcharts-tooltip {
		z-index: 9999 !important;
	}
</style>
