<script>
	export let index;
	export let setIndex;

	const images = [
		{ id: 0, bgColor: 'bg-blue-300/60', title: 'Agency' },
		{ id: 1, bgColor: 'bg-blue-400/60', title: 'Foreign Aid' },
		{ id: 2, bgColor: 'bg-green-300/60', title: 'Comparison' },
		{ id: 3, bgColor: 'bg-red-300/60', title: 'Info' }
	];
</script>

<div class="flex flex-wrap lg:flex-nowrap w-full justify-around items-center p-4 gap-2">
	{#each images as img}
		<button
			type="button"
			class={`w-full sm:w-1/4 lg:w-1/5 py-2 px-4 rounded-lg cursor-pointer transition duration-300 ease-in-out flex items-center justify-center text-center text-lg sm:text-xl lg:text-2xl ${img.bgColor} ${$index === img.id ? 'border-2 border-black' : ''}`}
			on:click={() => setIndex(img.id)}
		>
			{img.title}
		</button>
	{/each}
</div>
