<script lang="ts">
  import {
    filterStore,
    countriesStore,
    getForeignAidData,
    totalAmountStore,
    makeText,
  } from './helpers';
  let years = ['all', ...Array.from({ length: 10 }, (_, i) => (2015 + i).toString())];
  let text: string;

  $: {
    $filterStore;
    $totalAmountStore;
    getForeignAidData();
    text = makeText();
  }
</script>

<div class="flex flex-col space-y-2">
  <label class="text-lg" for="country">Country:</label>
  <select
    id="country"
    bind:value={$filterStore.country}
    class="p-2 rounded-md border border-grapy-300 focus:outline-none focus:ring-2 focuse:ring-blue-600 focus:border-transparent"
  >
    {#each $countriesStore as country}
      <option value={country}>{country}</option>
    {/each}
  </select>
</div>

<div class="flex flex-col space-y-1">
  <label class="text-lg" for="year">Year:</label>
  <select
    id="year"
    bind:value={$filterStore.year}
    class="p-2 rounded-md border border-grapy-300 focus:outline-none focus:ring-2 focuse:ring-blue-600 focus:border-transparent"
  >
    {#each years as year}
      <option value={year}>{year}</option>
    {/each}
  </select>
</div>

<div class="flex flex-col justify-center align-middle my-auto">
  <div class="flex justify-center text-lg my-2">{text}</div>
  <div class="flex justify-center text-xl font-medium">
    ${$totalAmountStore.toLocaleString()}
  </div>
</div>
