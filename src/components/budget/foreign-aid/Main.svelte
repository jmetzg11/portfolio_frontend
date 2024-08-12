<script>
  import { onMount } from 'svelte';
  import { getCountries } from './helpers';
  import Filters from './Filters.svelte';
  import BarChart from './BarChart.svelte';
  import Map from './Map.svelte';

  onMount(async () => {
    await getCountries();
  });
</script>

<div class="h-[90vh] bg-pink-200 w-full">
  <div class="h-[30vh] flex flex-row">
    <Filters /><BarChart />
  </div>
  <div class="h-[60vh] bg-green-200"><Map /></div>
</div>
