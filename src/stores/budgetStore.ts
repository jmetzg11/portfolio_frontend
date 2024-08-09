import {writable} from 'svelte/store'

export const activeBudgetButton = writable<string>('budget');

export const budgetAPIPayload = writable<object>({'start': '2024-01-01'})

export const data = writable<object>({'data': 'no data'})
