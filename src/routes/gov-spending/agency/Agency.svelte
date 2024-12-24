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
			console.error('Error fetching data:', error);
		}
	});
</script>

{#if data && data.mainData}
	<div class="flex flex-col gap-4 p-4 w-full h-full">
		<!-- Graph Section -->
		<div class="flex flex-col sm:flex-row gap-4 flex-shrink-0">
			<div class="flex-1 h-[40vh] sm:h-[50vh] md:h-[60vh] mx-auto">
				<PieGraph data={data.mainData} title="Main Agency Spending" />
			</div>
			<div class="flex-1 h-[40vh] sm:h-[50vh] md:h-[60vh] mx-auto">
				<PieGraph data={data.otherData} title="Other Agency Spending" />
			</div>
		</div>
		<!-- Table Section -->
		<div class="overflow-y-auto flex-grow min-h-[250px]">
			<Table data={data.remainingData} />
		</div>
	</div>
{:else}
	<p class="text-center mt-8 text-lg">Loading data...</p>
{/if}
