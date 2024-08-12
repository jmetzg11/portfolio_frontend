<script>
  export let data;
</script>

<table class="min-w-full divide-y divide-gray-200">
  <thead class="bg-gray-100 sticky top-0">
    <tr>
      <th class="px-6 py-1 text-left text-gray-700 uppercase tracking-wider">#</th>
      <th class="px-6 py-1 text-left text-gray-700 uppercase tracking-wider"
        >Smallest {data.length} Agencies</th
      >
      <th class="px-6 py-1 text-left text-gray-700 uppercase tracking-wider">Budget</th>
    </tr>
  </thead>
  <tbody class="bg-white divide-y divide-grapy-200">
    {#each data as row, index}
      <tr>
        <td class="px-6 py-1 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
        <td class="px-6 py-1 whitespace-nowrap text-sm text-gray-500">{row[0]}</td>
        <td class="px-6 py-1 whitespace-nowrap text-sm text-gray-500"
          >${row[1].toLocaleString()}</td
        >
      </tr>
    {/each}
  </tbody>
</table>
