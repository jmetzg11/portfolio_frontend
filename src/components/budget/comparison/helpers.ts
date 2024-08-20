import { writable } from 'svelte/store';

type ComparisonData = {
  [key: string]: Array<[number, number]>;
};

type ComparisonStoreType = {
  agencies: string[];
  data: ComparisonData;
  x_labels: number[];
};

export const comparisonStore = writable<ComparisonStoreType>({
  agencies: [],
  data: {},
  x_labels: [],
});

export const getComparisonData = async (): Promise<ComparisonStoreType | string> => {
  const url = `${import.meta.env.VITE_API}/comparison`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    const rsp: ComparisonStoreType = await response.json();
    comparisonStore.set(rsp);
    return rsp;
  } catch (err) {
    console.error('Failed to get agency data', err);
    return 'error';
  }
};

export const colors = [
  'rgba(0, 128, 128, 1)',
  'rgba(255, 99, 71, 1)',
  'rgba(124, 252, 0, 1)',
  'rgba(70, 130, 180, 1)',
  'rgba(0, 191, 255, 1)',
  'rgba(155, 69, 0, 1)',
  'rgba(138, 43, 226, 1)',
  'rgba(60, 179, 113, 1)',
];
