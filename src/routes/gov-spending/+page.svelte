<script>
	import BudgetHeader from './Header.svelte';
	import { writable } from 'svelte/store';
	import Agency from './agency/Agency.svelte';
	import ForeignAid from './foreignaid/ForeignAid.svelte';
	import Comparison from './comparison/Comparison.svelte';
	import Info from './info/Info.svelte';

	let index = writable(0);
	const setIndex = (newIndex) => {
		index.set(newIndex);
	};
</script>

<div class="flex flex-col h-screen overflow-hidden">
	<div class="flex-none">
		<BudgetHeader {index} {setIndex} />
	</div>
	<div class="flex-grow overflow-auto">
		{#if $index === 0}
			<Agency />
		{:else if $index === 1}
			<ForeignAid />
		{:else if $index === 2}
			<div class="p-4 h-full flex justify-center items-center">
				<Comparison />
			</div>
		{:else if $index === 3}
			<Info />
		{/if}
	</div>
</div>
