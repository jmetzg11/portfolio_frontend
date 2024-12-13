<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { icons } from './helpers';
	import { clickedTickers } from './store';

	const items = [
		{ icon: icons.EXI, ticker: 'EXI', description: 'Indeustry' },
		{ icon: icons.IXG, ticker: 'IXG', description: 'Energy' },
		{ icon: icons.IXJ, ticker: 'IXJ', description: 'Finance' },
		{ icon: icons.IXC, ticker: 'IXC', description: 'Health' },
		{ icon: icons.IXN, ticker: 'IXN', description: 'Tech' },
		{ icon: icons.IXP, ticker: 'IXP', description: 'Telecom' },
		{ icon: icons.JXI, ticker: 'JXI', description: 'Utility' },
		{ icon: icons.KXI, ticker: 'KXI', description: 'Staples' },
		{ icon: icons.MXI, ticker: 'MXI', description: 'Materials' },
		{ icon: icons.REET, ticker: 'REET', description: 'RealEst' },
		{ icon: icons.RXI, ticker: 'RXI', description: 'DiscCons' }
	];

	function toggleClick(ticker) {
		clickedTickers.update((set) => {
			if (set.has(ticker)) {
				set.delete(ticker);
			} else {
				set.add(ticker);
			}
			return set;
		});
	}
</script>

<div class="grid gap-4 m-4" style="grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));">
	{#each items as item}
		<div
			class="flex flex-col items-center justify-center p-4 border border-gray-200 shadow-lg rounded-lg w-20 h-20 cursor-pointer transition hover:bg-gray-100"
			on:click={() => toggleClick(item.ticker)}
		>
			{#if $clickedTickers.has(item.ticker)}
				<div class="text-2xl text-blue-500 mb-2">
					<FontAwesomeIcon icon={item.icon} />
				</div>
			{:else}
				<div class="text-2xl text-gray-400 mb-2">
					<FontAwesomeIcon icon={item.icon} />
				</div>
			{/if}

			<div class="text-sm font-semibold">{item.ticker}</div>
			<div class="text-xs text-gray-600">{item.description}</div>
		</div>
	{/each}
</div>
