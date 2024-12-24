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
	class="flex flex-col justify-center items-center h-full w-full text-xs sm:text-sm md:text-md lg:text-lg"
>
	<div
		class="flex justify-center items-center w-full p-0 sm:p-1 md:p-2 lg:p-3 text-[10px] sm:text-xs md:text-sm lg:text-base"
	>
		{sentence}
	</div>
	<div class="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
		{amount}
	</div>
</div>
