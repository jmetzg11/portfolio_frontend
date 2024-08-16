<script>
  import { onMount } from 'svelte';
  import { getForeignAidData } from './helpers';
  import Filters from './Filters.svelte';
  import BarChart from './BarChart.svelte';
  import Map from './Map.svelte';

  onMount(async () => {
    await getForeignAidData();
  });
</script>

<div class="h-[90vh] w-full">
  <div class="h-[20vh] flex flex-row">
    <div class="flex flex-col h-100 w-1/2 p-4"><Filters /></div>
    <div class="w-1/2"><BarChart /></div>
  </div>
  <Map />
</div>
