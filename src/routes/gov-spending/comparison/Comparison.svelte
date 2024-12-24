<script>
	import { onMount } from 'svelte';
	import ApexCharts from 'apexcharts';
	import { colors } from './helpers';

	let lineData = {};
	let xLabels = [];
	let agencies = [];
	let chartId = 'line-graph';
	let chart = null;
	let chartHeight = 0;

	function calculateChartHeight() {
		chartHeight = Math.max(window.innerHeight * 0.7, 300);
	}

	onMount(async () => {
		calculateChartHeight();
		window.addEventListener('resize', calculateChartHeight);

		try {
			const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/gov/comparison`);
			if (!response.ok) {
				throw Error('Failed to fetch comparison data');
			}
			const data = await response.json();
			lineData = data.data;
			xLabels = data.years;
			agencies = data.agencies;
			renderChart();
		} catch (error) {
			console.error('Error fetching data:', error);
		}

		return () => {
			window.removeEventListener('resize', calculateChartHeight);
		};
	});

	function renderChart() {
		const series = agencies.map((agency) => ({
			name: agency,
			data: lineData[agency].map((d) => d.amount)
		}));

		const options = {
			chart: {
				type: 'line',
				height: chartHeight,
				toolbar: { show: false }
			},
			series: series,
			xaxis: {
				categories: xLabels,
				title: { text: 'Years' }
			},
			yaxis: {
				title: { text: '$ Billions' },
				labels: {
					formatter: (value) => `$${value.toLocaleString()}`
				}
			},
			tooltip: {
				y: {
					formatter: (value) => `$${value.toLocaleString()}`
				}
			},
			colors: agencies.map((_, index) => colors[index % colors.length]),
			stroke: {
				curve: 'smooth',
				width: 3
			},
			legend: {
				show: true,
				position: 'top'
			},
			responsive: [
				{
					breakpoint: 768,
					options: {
						chart: {
							height: '300px'
						},
						legend: {
							position: 'bottom'
						}
					}
				}
			]
		};

		chart = new ApexCharts(document.getElementById(chartId), options);
		chart.render();
	}
</script>

<div id={chartId} class="w-full"></div>
