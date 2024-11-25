<script>
	export let year;
	import { createEventDispatcher } from 'svelte';
	import { colors } from './helpers';
	console.log(colors);
	let startYear = 2008;
	let endYear = 2024;
	let years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
	const dispatch = createEventDispatcher();

	function updateYear(newYear) {
		dispatch('change', newYear);
	}
</script>

<div class="flex justify-around items-center my-2">
	<div class="flex flex-row items-center">
		<div>
			<button
				on:click={() => updateYear('all')}
				class={`px-2 py-1 text-md md:text-lg lg:txt-xl rounded-lg transition-all duration-200
				${year === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
			>
				All
			</button>
		</div>

		<div class="flex flex-row items-center flex-wrap">
			{#each years as y, i}
				<button
					on:click={() => updateYear(y)}
					class={`px-1 py-1 text-xs md:text-sm lg:txt-lg transition-all duration-200 text-white
					${year === y ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}
					${i === 0 ? 'rounded-l-lg' : ''}
					${i === years.length - 1 ? 'rounded-r-lg' : ''}
					${year === y ? 'border-4 border-slate-900' : 'border-2 border-transparent'}
					`}
					style="background-color: {colors[2024 - y] || '#ccc'}"
				>
					{y}
				</button>
			{/each}
		</div>
	</div>
</div>
