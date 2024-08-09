<script lang="ts">
  import { activeBudgetButton } from '../../stores/budgetStore';
  import { getData } from '../../routes/budget/helpers';

  const setActive = (button: string) => {
    activeBudgetButton.set(button);
    getData(button);
    console.log('i was called');
  };
</script>

<header class="flex items-center justify-around h-[10vh] p-4">
  <button
    class="text-4xl p-6 mx-2 rounded-lg"
    class:active={$activeBudgetButton === 'budget'}
    on:click={() => setActive('budget')}
    style="background-color: rgba(56, 182, 255, 0.6)">Budget</button
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
