<script>
	import { onDestroy } from 'svelte';
	import { currentState } from './store';
	import { runSimulation } from './helpers';
	let stateValue;
	const unsubscribe = currentState.subscribe((value) => {
		stateValue = value;
	});

	function setState(newState) {
		currentState.set(newState);
	}

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="flex gap-4 my-4 justify-center">
	<button
		class="btn-style {stateValue === 'mouse' ? 'active-btn' : ''}"
		on:click={() => setState('mouse')}>Mouse</button
	>
	<button
		class="btn-style {stateValue === 'cheese' ? 'active-btn' : ''}"
		on:click={() => setState('cheese')}>Cheese</button
	>
	<button
		class="btn-style {stateValue === 'cat' ? 'active-btn' : ''}"
		on:click={() => setState('cat')}>Cat</button
	>
	<button
		class="px-4 py-2 text-slate-800 bg-purple-400 rounded-lg selection:rounded-lg shadow-md"
		on:click={runSimulation}>Run Simulation</button
	>
</div>

<style>
	.btn-style {
		@apply px-4 py-2 text-white font-semibold rounded-lg shadow-md;
		@apply bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400;
		transition: background-color 0.2s ease-in-out;
	}
	.active-btn {
		@apply bg-green-600 hover:bg-green-800;
	}
</style>
