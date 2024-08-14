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

<div class="h-[90vh] bg-pink-200 w-full">
  <div class="h-[30vh] flex flex-row">
    <Filters /><BarChart />
  </div>
  <Map />
</div>
