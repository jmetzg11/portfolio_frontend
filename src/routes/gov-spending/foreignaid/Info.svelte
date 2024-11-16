<script>
	import { onDestroy } from 'svelte';
	import { yearCountryDataStore } from './store';
	import { makeInfoValue, makeNumber } from './helpers.js';
	let sentence = 'loading';
	let amount = 0;

	const unsubscribe = yearCountryDataStore.subscribe(
		({ barData: newBarData, country: newCountry, year: newYear }) => {
			const result = makeInfoValue(newBarData, newCountry, newYear);
			sentence = result.sentence;
			amount = makeNumber(result.amount);
		}
	);

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div
	class="flex flex-col justify-center items-center h-full w-full text-sm sm:text-md md:text-lg lg:text-xl"
>
	<div
		class="flex justify-center items-center w-full p-0 sm:p-1 md:p-2 lg:p-3 text-xs sm:text-sm md:text-base lg:text-lg"
	>
		{sentence}
	</div>
	<div class="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
		{amount}
	</div>
</div>
