import { writable } from 'svelte/store';

export const activeBudgetButton = writable<string>('agency');
