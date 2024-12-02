import { writable } from 'svelte/store';

export const currentState = writable('rat');

export const gridSize = 50;
let initialGrid = Array.from({ length: gridSize }, () =>
	Array.from({ length: gridSize }, () => null)
);

initialGrid[4][2] = { type: 'mouse' };
initialGrid[6][44] = { type: 'cheese', value: 4 };
initialGrid[44][33] = { type: 'cheese', value: 4 };
initialGrid[22][23] = { type: 'cheese', value: 4 };
initialGrid[46][43] = { type: 'cheese', value: 4 };
initialGrid[26][12] = { type: 'cheese', value: 4 };
initialGrid[14][14] = { type: 'cheese', value: 4 };
initialGrid[12][16] = { type: 'cheese', value: 4 };
initialGrid[18][19] = { type: 'cat' };
export const gridStore = writable(initialGrid);
