<script>
	import { onMount } from 'svelte';
	import PieGraph from './PieGraph.svelte';
	import Table from './Table.svelte';

	let data;
	onMount(async () => {
		try {
			const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/gov/agency`);
			if (!response.ok) {
				throw new Error('Falied to fetch data');
			}
			data = await response.json();
		} catch (error) {
			console.err('Error fetching data:', error);
		}
	});
</script>

{#if data && data.mainData}
	<div class="flex flex-col gap-4 p-4 w-full h-full">
		<div class="flex flex-col sm:flex-row gap-4 flex-grow">
			<div class="flex-1">
				<PieGraph data={data.mainData} title={'Main Agency Spending'} />
			</div>
			<div class="flex-1">
				<PieGraph data={data.otherData} title={'Other Agency Spending'} />
			</div>
		</div>

		<div class="overflow-y-auto flex-grow">
			<Table data={data.remainingData} />
		</div>
	</div>
{:else}
	<p class="text-center mt-8 text-lg">Loading data...</p>
{/if}

<style>
	/* Responsive adjustments for smaller screens */
	@media (max-width: 1024px) {
		.graph-container {
			flex-direction: column;
		}

		.graph-container > div {
			margin-bottom: 1rem;
		}
	}
</style>
