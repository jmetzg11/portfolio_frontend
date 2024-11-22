<script>
	import { onMount, onDestroy } from 'svelte';
	import ApexCharts from 'apexcharts';
	import { colors } from './helpers';

	let lineData = {};
	let xLabels = [];
	let agencies = [];
	let chartId = 'line-graph';
	let chart = null;
	onMount(async () => {
		try {
			const resposne = await fetch(`${import.meta.env.VITE_BACKEND_URL}/gov/comparison`);
			if (!resposne.ok) {
				throw Error('Falied to fetch comparison data');
			}
			const data = await resposne.json();
			lineData = data.data;
			xLabels = data.years;
			agencies = data.agencies;
			renderChart();
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	});

	function renderChart() {
		const series = agencies.map((agency) => ({
			name: agency,
			data: lineData[agency].map((d) => d.amount)
		}));

		const options = {
			chart: {
				type: 'line',
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
			}
		};

		chart = new ApexCharts(document.getElementById(chartId), options);
		chart.render();
	}
</script>

<div id={chartId}></div>

<style></style>
