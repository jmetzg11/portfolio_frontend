<script lang="ts">
  import { filterStore, countriesStore, getForeignAidData } from './helpers';
  import Results from './Results.svelte';
  let years = ['all', ...Array.from({ length: 10 }, (_, i) => (2015 + i).toString())];

  $: {
    $filterStore;
    getForeignAidData();
  }
</script>

<div class="flex flex-col h-100 w-1/2 bg-blue-400">
  <Results />

  <div>
    <label for="country">Country:</label>
    <select id="country" bind:value={$filterStore.country}>
      {#each $countriesStore as country}
        <option value={country}>{country}</option>
      {/each}
    </select>
  </div>

  <div>
    <label for="year">Year:</label>
    <select id="year" bind:value={$filterStore.year}>
      {#each years as year}
        <option value={year}>{year}</option>
      {/each}
    </select>
  </div>
</div>
