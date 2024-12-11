import { writable } from 'svelte/store';
import { getBarData } from './helpers';

export const barDataStore = writable({
	categories: [],
	data: []
});

export const transactionDataStore = writable({});

const prepReserveData = (reserves) => {
	const categories = reserves.map((d) => d.stock);
	const data = reserves.map((d) => d.value);
	barDataStore.set({ categories, data });
};

export const transactionStore = writable([]);

async function fetchBarData() {
	const data = await getBarData();
	prepReserveData(data.reserves);
	console.log(data.transactions);
	transactionStore.set(data.transactions);
}

fetchBarData();
