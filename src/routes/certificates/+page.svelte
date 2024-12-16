<script>
	import { data } from './helpers';
</script>

<div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
	<div class="container mx-auto max-w-4xl space-y-6">
		{#each data as d, i}
			<div class="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
				<div class="p-4 flex justify-between items-center">
					<h3 class="text-lg font-semibold text-gray-800">{d.name}</h3>
					<div class="text-sm text-gray-500">{d.date}</div>
				</div>
				<p class="px-4 py-2 text-gray-700">{d.description}</p>
				<div class="p-4">
					<img
						class={`w-full h-auto object-contain rounded-md shadow-sm border`}
						src={d.img}
						alt={`certifcate ${d.name}`}
					/>
				</div>
			</div>
		{/each}
	</div>
</div>
