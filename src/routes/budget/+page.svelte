<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { activeBudgetButton, data } from '../../stores/budgetStore';
  import { get } from 'svelte/store';
  import { getData } from './helpers';

  onMount(() => {
    getData(get(activeBudgetButton));
  });
</script>

<div>graphs to be added later</div>
<div>Button clicked: {$activeBudgetButton}</div>
<div>{data}</div>
