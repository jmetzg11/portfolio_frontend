<script>
	export let year;
	export let country;
	export let countries;

	let years = Array.from({ length: 2025 - 2017 }, (_, i) => 2024 - i);
	years = ['all', ...years];
</script>

<div
	class="flex flex-wrap lg:flex-nowrap items-center justify-between p-4 bg-purple-300 title-container"
>
	<div class="flex-2 p-2 rounded-md bg-red-500 w-1/2 lg:w-auto mb-2 lg:mb-0">
		<select bind:value={year}>
			{#each years as y}
				<option value={y} selected={y === year}>{y}</option>
			{/each}
		</select>
		<select bind:value={country}>
			{#each countries as c}
				<option value={c} selected={c === country}>{c}</option>
			{/each}
		</select>
	</div>

	<div class="flex-2 p-2 rounded-md bg-gray-700 w-1/2 lg:w-auto mb-2 lg:mb-0">info</div>

	<div class="flex-1 p-2 rounded-md bg-violet-900 w-full lg:w-auto">bar graph</div>
</div>

<style>
	.title-container {
		height: 80px;
	}

	@media (max-width: 1024px) {
		.title-container {
			height: 120px;
		}
	}
</style>
