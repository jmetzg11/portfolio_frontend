import { writable } from 'svelte/store';

export const activeBudgetButton = writable<string>('agency');

export const budgetAPIPayload = writable<object>({ start: '2024-01-01' });
