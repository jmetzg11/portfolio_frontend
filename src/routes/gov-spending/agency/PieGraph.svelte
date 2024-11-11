<script>
	import { onMount } from 'svelte';
	export let data;
	export let title;

	import ApexCharts from 'apexcharts';
	let chart;
	let chartId = `chart-${Math.random().toString(36).substr(2, 9)}`;

	let selectedLabel = '';
	let selectedValue = '';

	const options = {
		chart: {
			type: 'pie',
			events: {
				dataPointSelection: function (event, chartContext, config) {
					selectedLabel = config.w.config.labels[config.dataPointIndex];
					selectedValue = config.w.config.series[config.dataPointIndex].toLocaleString('en-US');
				}
			}
		},
		title: {
			text: title,
			align: 'center',
			style: {
				fontSize: '20px',
				color: '#333'
			}
		},
		labels: data.map((d) => d.label),
		series: data.map((d) => d.value),
		colors: data.map((d) => d.backgroundColor),
		legend: {
			show: false
		},
		tooltip: {
			enabled: true,
			y: {
				formatter: (value, { seriesIndex, w }) => {
					return `$${value.toLocaleString('en-US')}`;
				}
			},
			style: {
				fontSize: '14px',
				color: '#ffffff'
			},
			fillSeriesColor: false,
			custom: function ({ series, seriesIndex, dataPointIndex, w }) {
				const label = w.config.labels[seriesIndex];
				const value = series[seriesIndex].toLocaleString('en-US');
				return `<div style="background-color: #333333; padding: 8px; border-radius: 4px; color: #ffffff;">
                      ${label}: $${value}
                    </div>`;
			}
		},
		plotOptions: {
			pie: {
				customScale: 1,
				expandOnClick: true
			}
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 0.8
				}
			}
		}
	};

	onMount(() => {
		chart = new ApexCharts(document.getElementById(chartId), options);
		chart.render();

		return () => {
			chart.destroy();
		};
	});
</script>

{#if selectedLabel && selectedValue}
	<div class="selected-info mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
		<p class="text-lg font-semibold">{selectedLabel}: ${selectedValue}</p>
	</div>
{/if}

<div id={chartId} class="chart-container"></div>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
	}

	.selected-info {
		width: 100%;
		text-align: center;
	}
</style>
