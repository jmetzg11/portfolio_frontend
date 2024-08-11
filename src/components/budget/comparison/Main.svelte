<script>
  import { onMount } from 'svelte';
  import { getComparisonData } from './helpers';

  let data;
  onMount(async () => {
    data = await getComparisonData();
  });
</script>

<h1>Comparison</h1>
<div>{data}</div>
