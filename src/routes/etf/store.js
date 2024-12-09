import { writable } from 'svelte/store';
import { getBarData } from './helpers';

export const barDataStore = writable({
	categories: [],
	data: []
});

async function fetchBarData() {
	const reserves = await getBarData();
	const categories = reserves.map((d) => d.stock);
	const data = reserves.map((d) => d.value);
	barDataStore.set({ categories, data });
}

fetchBarData();
