<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { transactionStore, clickedTickers } from './store';
	import { icons, colorMapper } from './helpers';

	let filteredTransactionData;

	$: filteredTransactionData = $transactionStore
		.filter((item) => $clickedTickers.has(item.stock))
		.slice(0, 55)
		.map((item) => ({
			...item,
			percent: Number(item.percent),
			date: new Date(item.date).toLocaleDateString('en-US', {
				month: 'short',
				day: '2-digit',
				timeZone: 'UTC'
			})
		}));
</script>

<div class="overflow-x-hidden">
	<div class="text-center font-semibold text-l md:text-xl lg:text-2xl xl:text-3xl">Last 5 Days</div>
	<table class="w-full">
		<tbody>
			{#if filteredTransactionData.length > 0}
				{#each filteredTransactionData as d, i (d)}
					<tr key={i} class="border-b border-gray-200">
						<td class="text-center" style="color: {colorMapper[d.stock]}"
							><FontAwesomeIcon icon={icons[d.stock]} /></td
						>
						<td class="text-center">{d.date.split('T')[0]}</td>
						<td
							class="text-center font-semibold {d.percent > 0 ? 'text-green-500' : 'text-red-500'}"
							>{d.percent.toFixed(2)}%</td
						>
						<td class="text-center">${d.value}</td>
					</tr>
				{/each}
			{:else}
				<tr>
					<td colspan="4">Loading...</td>
				</tr>
			{/if}
		</tbody>
	</table>
</div>
