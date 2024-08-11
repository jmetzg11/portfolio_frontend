<script lang="ts">
  import { onMount } from 'svelte';
  import Pie from './Pie.svelte';
  import Table from './Table.svelte';
  import { getAgencyData } from './helpers';

  let data = { main_data: null, other_data: null, other_other_labels: null };
  onMount(async () => {
    data = await getAgencyData();
  });
</script>

<div class="h-[90vh] w-full flex flex-col">
  <div class="flex flex-row h-[50vh]">
    {#if data.main_data && data.other_data}
      <div class="w-1/2 bg-blue-100"><Pie data={data.main_data} /></div>
      <div class="w-1/2 bg-purple-200"><Pie data={data.other_data} /></div>
    {/if}
  </div>
  <div class="h-[40vh] bg-slate-400 flex justify-center items-center">
    {#if data.other_other_labels}
      <Table data={data.other_other_labels} />
    {/if}
  </div>
</div>
