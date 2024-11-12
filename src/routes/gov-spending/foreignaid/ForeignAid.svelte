<script>
	import { onMount } from 'svelte';
	import Title from './Title.svelte';
	import Map from './Map.svelte';
	let year = 'all';
	let country = 'all';

	let data;
	const url = `${import.meta.env.VITE_BACKEND_URL}/gov/foreign-aid`;
	onMount(async () => {
		console.log(url);
		try {
			const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/gov/foreign-aid`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					country: country,
					year: year
				})
			});
			console.log(response);
			if (!response.ok) {
				throw new Error('Falied to fetch data');
			}
			data = await response.json();
			console.log(data);
		} catch (error) {
			console.err('Error fetching data:', error);
		}
	});
</script>

<div class="flex flex-col w-full h-screen overflow-hidden"><Title /><Map /></div>
