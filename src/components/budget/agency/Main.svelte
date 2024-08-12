<script lang="ts">
  import { onMount } from 'svelte';
  import Pie from './Pie.svelte';
  import Table from './Table.svelte';
  import { getAgencyData, type AgencyData } from './helpers';

  let data: AgencyData = { main_data: null, other_data: null, table_data: null };
  onMount(async () => {
    const result = await getAgencyData();
    if (result !== 'error') {
      data = result;
    }
  });
</script>

<div class="h-[90vh] w-full flex flex-col">
  <div class="flex flex-row h-[50vh]">
    {#if data.main_data && data.other_data}
      <div class="w-1/2 flex flex-col items-center justify-center">
        <div class="font-medium text-2xl h-[3vh] mt-2 text-gray-800">
          Major Spending 2024
        </div>
        <div class="h-[47vh] w-full"><Pie data={data.main_data} /></div>
      </div>
      <div class="w-1/2 flex flex-col items-center justify-center">
        <div class="font-medium text-2xl h-[3vh] mt-2 text-gray-800">
          Other Spending 2024
        </div>
        <div class="h-[47vh] w-full"><Pie data={data.other_data} /></div>
      </div>
    {/if}
  </div>
  <div class="max-h-[40vh] overflow-auto border rounded-lg mx-2 my-2">
    {#if data.table_data}
      <Table data={data.table_data} />
    {/if}
  </div>
</div>
