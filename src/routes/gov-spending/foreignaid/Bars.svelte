<script>
	import { barDataStore } from './store';
	import { onDestroy, onMount } from 'svelte';
	import ApexCharts from 'apexcharts';

	let chart;
	let barData = null;
	let chartId = 'country-bar-graph';
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
		series: [],
		xaxis: {
			categories: [],
			labels: { style: { colors: '#000' } }
		},
		yaxis: { show: false },
		grid: { show: false, padding: { top: -30, right: 0, left: 0, bottom: 0 } },
		tooltip: { enabled: false },
		dataLabels: {
			enabled: true,
			formatter: function (val) {
				const result = val / 1000000;
				const formattedValue =
					result > 9999
						? `$${Number(result.toFixed(0)).toLocaleString('en')} mil`
						: `$${Number(result.toFixed(2)).toLocaleString('en')} mil`;
				return formattedValue;
			},
			style: { colors: ['#000'], fontWeight: '400', fontSize: '14px' }
		},
		plotOptions: {
			bar: {
				horizontal: false,
				dataLabels: { position: 'top' }
			}
		},
		responsive: [
			{
				breakpoint: 768, // Adjust for smaller screens
				options: {
					xaxis: {
						labels: {
							style: { fontSize: '12px' } // Smaller font size for axis labels
						}
					},
					dataLabels: {
						style: { fontSize: '10px' } // Smaller font size for data labels
					},
					plotOptions: {
						bar: {
							dataLabels: { position: 'top' }
						}
					}
				}
			},
			{
				breakpoint: 480, // Further adjustment for very small screens
				options: {
					xaxis: {
						labels: {
							style: { fontSize: '10px' } // Even smaller font size
						}
					},
					dataLabels: {
						style: { fontSize: '8px' } // Smaller font size for data labels
					}
				}
			}
		]
	};

	const unsubscribe = barDataStore.subscribe((value) => {
		barData = value;

		if (chart && barData) {
			updateChart();
		}
	});

	function initializeChart() {
		const chartElement = document.getElementById(chartId);
		if (!chartElement || !barData) return;

		options.series = [
			{
				name: 'Amount',
				data: barData.map((item) => item.y)
			}
		];
		options.xaxis.categories = barData.map((item) => item.x);
		chart = new ApexCharts(document.getElementById(chartId), options);
		chart.render();
	}
	function updateChart() {
		if (barData && chart) {
			chart.updateOptions({
				series: [
					{
						name: 'Amount',
						data: barData.map((item) => item.y)
					}
				],
				xaxis: {
					categories: barData.map((item) => item.x)
				}
			});
		}
	}

	onMount(() => {
		if (barData) {
			initializeChart();
		}

		return () => {
			if (chart) {
				chart.destroy();
				chart = null;
			}
		};
	});

	onDestroy(() => {
		unsubscribe();
	});

	$: {
		if (barData && !chart) {
			initializeChart();
		}
	}
</script>

<div id={chartId} class="w-full h-full"></div>

<style>
	#country-bar-graph {
		height: 100%;
		width: 100%;
	}
</style>
