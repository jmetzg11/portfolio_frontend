import { writable, derived } from 'svelte/store';

export const barDataStore = writable(null);
export const countriesStore = writable(null);
export const mapDataStore = writable(null);
export const countryStore = writable('all');
export const yearStore = writable('all');

export const yearCountryStore = derived(
	[yearStore, countryStore],
	([$yearStore, $countryStore]) => ({
		year: $yearStore,
		country: $countryStore
	})
);

export const yearCountryDataStore = derived(
	[barDataStore, countryStore, yearStore],
	([$barDataStore, $countryStore, $yearStore]) => ({
		barData: $barDataStore,
		country: $countryStore,
		year: $yearStore
	})
);
