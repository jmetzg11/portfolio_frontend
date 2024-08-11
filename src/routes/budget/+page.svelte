<script lang="ts">
  import { activeBudgetButton } from '../../stores/budgetStore';
  import Agency from '../../components/budget/agency/Main.svelte';
  import ForeignAid from '../../components/budget/foreign-aid/Main.svelte';
  import Comparison from '../../components/budget/comparison/Main.svelte';
  import Info from '../../components/budget/info/Main.svelte';
</script>

{#if $activeBudgetButton === 'agency'}
  <Agency />
{:else if $activeBudgetButton === 'foreignAid'}
  <ForeignAid />
{:else if $activeBudgetButton === 'comparison'}
  <Comparison />
{:else}
  <Info />
{/if}
