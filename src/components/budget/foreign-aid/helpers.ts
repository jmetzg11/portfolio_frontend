import { writable, get } from 'svelte/store';

export type MapDataItem = {
  lat: number;
  lng: number;
  text: string;
  size: number;
  amount: number;
};

export const filterStore = writable({
  country: 'all',
  year: 'all',
});

export const countriesStore = writable<string[]>(['all']);
export const mapDataStore = writable([]);

export const getForeignAidData = async () => {
  const url = `${import.meta.env.VITE_API}/foreign_aid`;
  const filterData = get(filterStore);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'applicaiton/json',
      },
      body: JSON.stringify(filterData),
    });
    const result = await response.json();
    countriesStore.set(result.countries);
    mapDataStore.set(result.map_data);
  } catch (err) {
    console.error('Failed to get agency data', err);
    return 'error';
  }
};
