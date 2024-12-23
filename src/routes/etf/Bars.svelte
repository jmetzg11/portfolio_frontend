<script>
	import { onMount } from 'svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { barDataStore, clickedTickers } from './store';
	import { icons, colorMapper } from './helpers';

	let chart;
	let chartId = 'etf-bar-graph';
	let filteredBarData;
	let barPositions = [];
	let barColors = [];
	let dataLabelFontSize = '12px';

	$: filteredBarData = {
		categories: $barDataStore.categories.filter((category) => $clickedTickers.has(category)),
		data: $barDataStore.data.filter((_, index) =>
			$clickedTickers.has($barDataStore.categories[index])
		)
	};
	$: {
		barColors = filteredBarData.categories.map((c) => colorMapper[c]);
	}

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
					padding: 0,
					events: {
						animationEnd: function (chartContext, options) {
							setTimeout(() => calculateBarPositions(), 150);
						}
					},
					zoom: { enabled: false },
					pan: { enabled: false }
				},
				title: { text: '' },
				series: [],
				xaxis: {
					categories: [],
					labels: { show: false }
				},
				yaxis: { show: false },
				grid: { show: false },
				tooltip: { enabled: false },
				dataLabels: {
					enabled: true,
					style: { fontSize: '12px' },
					formatter: function (val) {
						return `$${Math.round(val)}`;
					}
				},
				legend: { show: false },
				plotOptions: {
					bar: {
						horizontal: false,
						dataLabels: { position: 'top' },
						columnWidth: '85%'
					}
				}
			});
			await chart.render();
			updateChart();
		}
	}

	function updateChart() {
		if (filteredBarData && chart) {
			const columnWidth =
				filteredBarData.data.length > 2 ? '85%' : `${100 / filteredBarData.data.length}%`;

			chart.updateOptions({
				series: [
					{
						name: 'Data Series',
						data: filteredBarData.data
					}
				],
				colors: barColors,
				plotOptions: {
					bar: {
						distributed: true,
						columnWidth,
						barHeight: '100%'
					}
				},
				xaxis: {
					categories: filteredBarData.categories,
					labels: { show: false }
				},
				yaxis: { show: false }
			});
		}
	}

	function calculateBarPositions() {
		const chartElement = document.querySelector(`#${chartId}`);
		const bars = document.querySelectorAll(`#${chartId} .apexcharts-bar-area`);

		if (!chartElement || bars.length === 0) {
			barPositions = [];
			return;
		}

		const chartRect = chartElement.getBoundingClientRect();
		const chartWidth = chartRect.width;

		barPositions = Array.from(bars).map((bar, index) => {
			const rect = bar.getBoundingClientRect();
			if (bars.length < 3) {
				return (chartWidth / (bars.length + 1)) * (index + 1) + chartRect.left - chartRect.left;
			}
			return rect.left + rect.width / 2 - chartRect.left;
		});
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

<div class="relative h-full w-full">
	<div
		class="absolute top-0 left-0 w-full text-center font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl"
	>
		ETF Reserves
	</div>
	<div id={chartId}></div>
	<div class="absolute bottom-0 left-0 w-full flex justify-around">
		{#each filteredBarData.categories as category, i (category)}
			{#if barPositions[i]}
				<div
					key={category}
					class="absolute"
					style="transform: translateX(-50%); top: 100%; left: {barPositions[
						i
					]}px; color: {colorMapper[category]};"
				>
					<FontAwesomeIcon id={category} key={category} icon={icons[category]} class="text-2xl" />
				</div>{/if}
		{/each}
	</div>
</div>
