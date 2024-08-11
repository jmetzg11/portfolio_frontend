<script>
  import { onMount } from 'svelte';
  import { getForeignAidData } from './helpers';

  let data;
  onMount(async () => {
    data = await getForeignAidData();
  });
</script>

<h1>Foreign Aid</h1>
<div>{data}</div>
