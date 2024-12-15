<script>
	import TopPart from './TopPart.svelte';
	import Bars from './Bars.svelte';
	import LineGraph from './LineGraph.svelte';
	import FullTable from './FullTable.svelte';
	import Info from './Info.svelte';
</script>

<div class="flex flex-col mx-auto max-w-[1280px] h-screen main-container">
	<div class="flex-none">
		<TopPart />
	</div>
	<div class="flex-none mb-5 z-10">
		<Bars />
	</div>
	<div class="flex-none grid grid-cols-1 md:grid-cols-6 gap-4 px-4 mt-5">
		<div class="md:col-span-4 min-h-[300px] z-20">
			<LineGraph />
		</div>
		<div class="md:col-span-2 overflow-y-auto max-h-[250px] mb-3">
			<FullTable />
		</div>
	</div>
	<div class="flex-1"><Info /></div>
</div>
