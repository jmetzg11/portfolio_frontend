<script>
	import { transactionStore } from './store';
</script>

<table>
	<thead>
		<tr>
			<th>Stock</th>
			<th>Date</th>
			<th>Market Value</th>
			<th>Unrealized P&L</th>
			<th>Percent Change</th>
			<th>Amount Spent</th>
		</tr>
	</thead>
	<tbody>
		{#if $transactionStore.length > 0}
			{#each $transactionStore as d, i}
				<tr key={i}>
					<td>{d.stock}</td>
					<td>{d.date}</td>
					<td>{d.marketValue}</td>
					<td>{d.unrealizedPlpc}</td>
					<td>{d.percent}</td>
					<td>{d.value}</td>
				</tr>
			{/each}
		{:else}
			<tr>
				<td colspan="4">Loading...</td>
			</tr>
		{/if}
	</tbody>
</table>
