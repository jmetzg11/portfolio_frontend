import { writable } from 'svelte/store';
import { getData } from './helpers';

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
	const data = await getData();
	prepReserveData(data.reserves);
	transactionStore.set(data.transactions);
}

fetchBarData();

export const clickedTickers = writable(
	new Set(['EXI', 'IXC', 'IXG', 'IXN', 'JXI', 'IXP', 'RXI', 'KXI', 'MXI', 'REET', 'IXJ'])
);
