<script>
	import { onMount } from 'svelte';
	import Title from './Title.svelte';
	import Map from './Map.svelte';
	import { fetchMapData, fetchBarData } from './helpers';
	let year = 'all';
	let country = 'all';
	let countries = ['all'];
	let barData = null;

	$: console.log(year);
	$: console.log(barData);

	let mapData = null;
	onMount(async () => {
		const data = await fetchMapData(year);
		mapData = data.mapData;
		countries = data.countries;
		barData = await fetchBarData(country);
	});

	$: if (year) {
		fetchMapDataReactively();
	}

	$: if (country) {
		fetchBarDataReactively();
	}

	async function fetchMapDataReactively() {
		const data = await fetchMapData(year);
		mapData = data.mapData;
		countries = data.countries;
	}
	async function fetchBarDataReactively() {
		barData = await fetchBarData(country);
	}
</script>

<div class="flex flex-col w-full h-full overflow-hidden">
	<div class="flex-none"><Title bind:year bind:country {countries} /></div>
	<div class="flex-grow">
		{#if mapData}
			<Map data={mapData} />
		{:else}
			<p>Loading map data...</p>
		{/if}
	</div>
</div>

<style>
	.flex-grow {
		flex-grow: 1;
	}
</style>
