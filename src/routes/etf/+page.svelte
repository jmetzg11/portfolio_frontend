<script>
	import TopPart from './TopPart.svelte';
	import Bars from './Bars.svelte';
	import LineGraph from './LineGraph.svelte';
	import FullTable from './FullTable.svelte';
	import Info from './Info.svelte';
</script>

<div class="flex flex-col h-screen">
	<div class="flex-none">
		<TopPart />
	</div>
	<div class="h-[20%]">
		<Bars />
	</div>
	<div class="flex-1 grid grid-cols-1 md:grid-cols-6 gap-4 px-4 overflow-hidden">
		<div class="md:col-span-4">
			<LineGraph />
		</div>
		<div class="md:col-span-2 overflow-y-auto max-h-[400px] mb-3">
			<FullTable />
		</div>
	</div>
	<div class="flex-1"><Info /></div>
</div>
