<script>
	export let data;
</script>

<h1 class="text-2xl font-bold mb-4 text-center">Remaining Agencies</h1>

<div class="overflow-x-auto rounded-lg shadow-lg">
	<table class="min-w-full bg-white">
		<thead>
			<tr class="bg-blue-500 text-white uppercase text-sm leading-normal">
				<th class="py-2 px-6 text-left">#</th>
				<th class="py-2 px-6 text-left">Agency</th>
				<th class="py-2 px-6 text-left">Amount</th>
			</tr>
		</thead>
		<tbody class="text-gray-700 text-sm font-light">
			{#each data as item, index}
				<tr class="border-b border-gray-200 hover:bg-gray-100 transition duration-200 ease-in-out">
					<td class="py-2 px-6 text-left">{index + 1}</td>
					<td class="py-2 px-6 text-left">{item.label}</td>
					<td class="py-2 px-6 text-left">${item.value.toLocaleString()}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
