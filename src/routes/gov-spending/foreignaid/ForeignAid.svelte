<script>
	import { onMount, onDestroy } from 'svelte';
	import TopPart from './TopPart.svelte';
	import Map from './Map.svelte';
	import { fetchMapData, fetchBarData } from './helpers';
	import { yearCountryStore } from './store.js';

	let year = 'all';
	let country = 'all';
	const unsubscribe = yearCountryStore.subscribe(({ year: newYear, country: newCountry }) => {
		if (newYear != year) {
			year = newYear;
			fetchMapData(year);
		}
		if (newCountry != country) {
			country = newCountry;
			fetchBarData(newCountry);
		}
	});

	onMount(async () => {
		await fetchMapData(year);
		await fetchBarData(country);
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="flex flex-col w-full h-full overflow-hidden">
	<div class="w-full h-[30%]"><TopPart /></div>
	<div class="flex-grow">
		<Map />
	</div>
</div>
