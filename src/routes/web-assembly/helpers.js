import { get } from 'svelte/store';
import { gridStore, gridSize } from './store';

const findPositions = (grid) => {
	let seen = { seenMice: new Set(), seenCats: new Set(), seenCheeses: new Set() };
	let results = { mice: [], cats: [], cheeses: [] };
	for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
		for (let colIndex = 0; colIndex < grid[0].length; colIndex++) {
			const instance = grid[rowIndex][colIndex];
			if (instance) {
				if (instance.type === 'mouse') {
					results['mice'].push({ row: rowIndex, col: colIndex });
					seen['seenMice'].add(`${rowIndex},${colIndex}`);
				} else if (instance.type === 'cat') {
					results['cats'].push({ row: rowIndex, col: colIndex });
					seen['seenCats'].add(`${rowIndex},${colIndex}`);
				} else if (instance.type === 'cheese') {
					results['cheeses'].push({ row: rowIndex, col: colIndex });
					seen['seenCheeses'].add(`${rowIndex},${colIndex}`);
				}
			}
		}
	}
	return { seen, results };
};

// Euclidean Distance
const calculateDistance = (pos1, pos2) => {
	return Math.sqrt(Math.pow(pos1.row - pos2.row, 2) + Math.pow(pos1.col - pos2.col, 2));
};

const moveAnimal = (animal, target, seen) => {
	const possibleMoves = [
		{ row: animal.row, col: animal.col },
		{ row: animal.row + 1, col: animal.col },
		{ row: animal.row - 1, col: animal.col },
		{ row: animal.row, col: animal.col + 1 },
		{ row: animal.row, col: animal.col - 1 },
		{ row: animal.row + 1, col: animal.col + 1 },
		{ row: animal.row + 1, col: animal.col - 1 },
		{ row: animal.row - 1, col: animal.col + 1 },
		{ row: animal.row - 1, col: animal.col - 1 }
	];
	let bestMove = { row: animal.row, col: animal.col };
	let shortestDistance = calculateDistance(animal, target);

	for (let move of possibleMoves) {
		const positionKey = `${move.row},${move.col}`;
		if (
			!seen.has(positionKey) &&
			move.row >= 0 &&
			move.col > 0 &&
			move.row < gridSize &&
			move.col < gridSize
		) {
			const distance = calculateDistance(move, target);
			if (distance < shortestDistance) {
				shortestDistance = distance;
				bestMove = move;
			}
		}
	}
	return bestMove;
};

export const runSimulation = () => {
	let grid = get(gridStore);
	let { seen, results } = findPositions(grid);
	let { seenMice, seenCats, seenCheeses } = seen;
	let { mice, cats, cheeses } = results;
	if (mice.length === 0 || cheeses === 0) {
		return;
	}

	mice.forEach((mouse, mouseIndex) => {
		const originalMousePosition = { ...mouse };
		let closestCheeseIndex = null;
		let closestCheese = null;
		let shortestDistance = Infinity;

		cheeses.forEach((cheese, cheeseIndex) => {
			const distance = calculateDistance(mouse, cheese);
			if (distance < shortestDistance) {
				shortestDistance = distance;
				closestCheeseIndex = cheeseIndex;
				closestCheese = cheese;
			}
		});
		if (closestCheese) {
			const newPosition = moveAnimal(mouse, closestCheese, seenMice);
			// new mouse position is the same as a cheese
			if (newPosition.row === closestCheese.row && newPosition.col === closestCheese.col) {
				// eat a piece of cheese
				if (grid[closestCheese.row][closestCheese.col].value > 1) {
					grid[closestCheese.row][closestCheese.col].value -= 1;
				}
				// cheese turns into mouse
				else {
					grid[newPosition.row][newPosition.col] = { type: 'mouse' };
					seenMice.delete(`${originalMousePosition.row},${originalMousePosition.col}`);
					seenMice.add(`${newPosition.row},${newPosition.col}`);
				}
			}
			// mouse is moving closer to cheese
			else {
				grid[originalMousePosition.row][originalMousePosition.col] = null;
				grid[newPosition.row][newPosition.col] = { type: 'mouse' };
				seenMice.add(`${newPosition.row},${newPosition.col}`);
			}
		}
	});
	cats.forEach((cat, catIndex) => {
		const originalCatPosition = { ...cat };
		let closestMouseIndex = null;
		let closestMouse = null;
		let shortestDistance = Infinity;

		mice.forEach((mouse, mouseIndex) => {
			const distance = calculateDistance(mouse, cat);
			if (distance < shortestDistance) {
				shortestDistance = distance;
				closestMouseIndex = mouseIndex;
				closestMouse = mouse;
			}
		});
		if (closestMouse) {
			const newPosition = moveAnimal(cat, closestMouse, seenCats);
			// cat lands on mouse
			if (newPosition.row == closestMouse.row && newPosition.col == closestMouse.col) {
				seenMice.delete(`${newPosition.row},${newPosition.col}`);
			}
			seenCats.add(`${newPosition.row},${newPosition.col}`);
			grid[newPosition.row][newPosition.col] = { type: 'cat' };
			grid[originalCatPosition.row][originalCatPosition.col] = null;
			seenCats.delete(`${originalCatPosition.row},${originalCatPosition.col}`);
		}
	});

	gridStore.set(grid);
	runSimulation();
};
