<script lang="ts">
  import { activeBudgetButton } from '../../stores/budgetStore';

  const setActive = async (button: string) => {
    activeBudgetButton.set(button);
  };
</script>

<header class="flex items-center justify-around h-[10vh] p-4">
  <button
    class="text-4xl p-6 mx-2 rounded-lg"
    class:active={$activeBudgetButton === 'agency'}
    on:click={() => setActive('agency')}
    style="background-color: rgba(56, 182, 255, 0.6)">Agency</button
  >
  <button
    class="text-4xl p-6 mx-2 rounded-lg"
    class:active={$activeBudgetButton === 'foreignAid'}
    on:click={() => setActive('foreignAid')}
    style="background-color: rgba(100, 149, 237, 0.6)">Foreign Aid</button
  >
  <button
    class="text-4xl p-6 mx-2 rounded-lg"
    class:active={$activeBudgetButton === 'comparison'}
    on:click={() => setActive('comparison')}
    style="background-color: rgba(152, 251, 152, 0.6)">Comparison</button
  >
  <button
    class="text-4xl p-6 mx-2 rounded-lg"
    class:active={$activeBudgetButton === 'info'}
    on:click={() => setActive('info')}
    style="background-color: rgba(240, 128, 128, 0.6)"
  >
    Info
  </button>
</header>

<style>
  .active {
    border: 2px solid black;
  }
</style>
