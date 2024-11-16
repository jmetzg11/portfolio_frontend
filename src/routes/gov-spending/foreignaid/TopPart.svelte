<script>
	import Bar from './Bars.svelte';
	import Selectors from './Selectors.svelte';
	import Info from './Info.svelte';
</script>

<div class="container-top-part h-full w-full flex flex-col">
	<div class="flex h-[40%] w-full">
		<div class="flex-1"><Selectors /></div>
		<div class="flex-1"><Info /></div>
	</div>
	<div class="h-[60%] w-full"><Bar /></div>
</div>
