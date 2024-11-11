<script>
	import { onMount } from 'svelte';

	let data;
	onMount(async () => {
		try {
			const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/gov/foreign-aid`);
			if (!response.ok) {
				throw new Error('Falied to fetch data');
			}
			data = await response.json();
		} catch (error) {
			console.err('Error fetching data:', error);
		}
	});
	console.log(data);
</script>

<h1>{data.data}</h1>
