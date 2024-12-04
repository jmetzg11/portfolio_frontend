<script>
	import { onDestroy, tick } from 'svelte';
	import { currentState, gridStore } from './store';
	import Buttons from './Buttons.svelte';
	let stateValue;
	const unsubscribeCurrentState = currentState.subscribe((value) => {
		stateValue = value;
	});
	let grid = [];
	const unsubscribeGridStore = gridStore.subscribe((value) => {
		grid = value;
	});

	async function handleCellClick(rowIndex, colIndex) {
		console.log('i was called');
		gridStore.update((grid) => {
			const updatedGrid = [...grid];
			if (stateValue === 'cheese') {
				updatedGrid[rowIndex][colIndex] = { type: stateValue, value: 4 };
			} else {
				updatedGrid[rowIndex][colIndex] = { type: stateValue };
			}
			return updatedGrid;
		});
		await tick();
	}

	let rowHeight = `${100 / grid.length}%`;

	onDestroy(() => {
		unsubscribeCurrentState();
		unsubscribeGridStore();
	});
</script>

<Buttons />

<div class="container">
	{#each grid as row, rowIndex}
		<div class="row" style="height: {rowHeight}">
			{#each row as cell, colIndex}
				<div
					class="cell"
					on:click={() => handleCellClick(rowIndex, colIndex)}
					on:keydown={(event) => handleKeyDown(event, rowIndex, colIndex)}
					tabindex="0"
					role="button"
					aria-label="Grid cell at {rowIndex}, {colIndex}"
				>
					{#if cell}
						{#if cell.type === 'cat'}
							<span class="emoji">🐱</span>
						{:else if cell.type === 'mouse'}
							<span class="emoji">🐭</span>
						{:else if cell.type === 'cheese'}
							<span class="emoji">🧀</span>
						{/if}
					{/if}
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.container {
		width: 800px;
		height: 800px;
		display: flex;
		flex-direction: column;
		border: solid 1px #d3d3d3;
	}

	.row {
		display: flex;
		width: 100%;
	}

	.cell {
		flex: 1;
		transition: background-color 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		position: relative;
	}
	.cell:hover {
		background-color: #d3d3d3;
	}
	.emoji {
		font-size: 0.8em;
		line-height: 1;
		position: absolute;
	}
</style>
