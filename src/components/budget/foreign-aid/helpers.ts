import { writable, get } from 'svelte/store';
import type { ChartData, ChartDataset } from 'chart.js';

export type BarChartType = {
  labels: string[];
  datasets: ChartDataset<'bar'>[];
};

export type MapDataItem = {
  lat: number;
  lng: number;
  text: string;
  size: number;
  amount: number;
};

type BarData = {
  year: number;
  amount: number;
};

export const filterStore = writable({
  country: 'all',
  year: 'all',
});

export const countriesStore = writable<string[]>(['all']);
export const mapDataStore = writable([]);
export const barDataStore = writable<BarData[]>([]);
export const totalAmountStore = writable<number>(0);

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
    const rsp = await response.json();
    countriesStore.set(rsp.map_results.countries);
    mapDataStore.set(rsp.map_results.map_data);
    barDataStore.set(rsp.bar_results.bar_data);
    totalAmountStore.set(rsp.bar_results.total_amount);
  } catch (err) {
    console.error('Failed to get agency data', err);
    return 'error';
  }
};

export const makeText = () => {
  const { year, country } = get(filterStore);
  if (year === 'all' && country === 'all') {
    return 'USA spenindg abroad (10 yrs.)';
  } else if (year === 'all' && country !== 'all') {
    return `USA spending in ${country} (10 yrs.)`;
  } else if (year !== 'all' && country === 'all') {
    return `USA spending in ${year}`;
  } else {
    return `USA spending in ${country} in ${year}`;
  }
};
