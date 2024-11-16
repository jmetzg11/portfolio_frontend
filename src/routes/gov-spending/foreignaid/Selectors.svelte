<script>
	import { countryStore, yearStore, countriesStore } from './store';

	let years = Array.from({ length: 2025 - 2017 }, (_, i) => 2024 - i);
	years = ['all', ...years];
</script>

<div class="flex flex-row gap-1 sm:gap-2 md:gap-4 p-1 sm:p-2 md:p-3 lg:p-4 h-full w-full">
	<div class="flex flex-col w-full lg:w-1/3">
		<label for="year-selected" class="text-sm font-semibold mb-1">Year</label>
		<select
			bind:value={$yearStore}
			class="p-0 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
		>
			{#each years as y}
				<option value={y}>{y}</option>
			{/each}
		</select>
	</div>
	<div class="flex flex-col w-full lg:w-2/3">
		<label for="country-select" class="text-sm font-semibold mb-1">Country</label>
		<select
			bind:value={$countryStore}
			class="p-0 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
		>
			{#each $countriesStore as c}
				<option value={c}>{c}</option>
			{/each}
		</select>
	</div>
</div>
