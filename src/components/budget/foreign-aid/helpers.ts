import { writable, get } from 'svelte/store';

export const filterStore = writable({
  country: 'all',
  year: 'all',
});

export const countriesStore = writable<string[]>(['all']);

export const getCountries = async (): Promise<string[] | 'error' | undefined> => {
  const url = `${import.meta.env.VITE_API}/get_countries`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    const resp = await response.json();
    countriesStore.set(resp.countries);
  } catch (err) {
    console.error('Falied to get a list of countries');
    return 'error';
  }
};

export const getForeignAidData = async () => {
  console.log('get for aid was called');
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
    console.log(url);
    console.log(result);
  } catch (err) {
    console.error('Failed to get agency data', err);
    return 'error';
  }
};
