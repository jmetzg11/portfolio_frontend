import { barDataStore, countriesStore, mapDataStore } from './store';

export const fetchMapData = async (year) => {
	const yearAsString = String(year);
	try {
		const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/gov/foreign-aid-map`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				year: yearAsString
			})
		});
		if (!response.ok) {
			throw new Error('Falied to fetch data');
		}
		let data = await response.json();
		const mapData = data.mapData;
		const countries = data.countries;
		mapDataStore.set(mapData);
		countriesStore.set(countries);
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

export const fetchBarData = async (country) => {
	try {
		const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/gov/foreign-aid-bar`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				country: country
			})
		});
		if (!response.ok) {
			throw new Error('Falied to fetch data');
		}
		let data = await response.json();
		barDataStore.set(data.barData);
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

export const normalizeData = (data) => {
	const minValue = Math.min(...data.map((item) => parseFloat(item.amount)));
	const maxValue = Math.max(...data.map((item) => parseFloat(item.amount)));
	const minRange = 4;
	const maxRange = 40;

	return data.map((item) => {
		const normalizedAmount =
			((parseFloat(item.amount) - minValue) / (maxValue - minValue)) * (maxRange - minRange) +
			minRange;

		return {
			...item,
			normalizedAmount
		};
	});
};

export const makeInfoValue = (data, country, year) => {
	let amount = '';
	let sentence = '';
	if (Array.isArray(data)) {
		if (year !== 'all') {
			data = data.filter((d) => d.x === year);
			if (data.length > 0) {
				amount = data[0].y;
			} else {
				amount = 0;
			}
			if (country === 'all') {
				sentence = `Total foreign aid provided by the U.S. in ${year}`;
				return { sentence, amount };
			} else {
				sentence = `Total foreign aid provided by the U.S. to ${country} in ${year}`;
				return { sentence, amount };
			}
		} else {
			amount = data.reduce((acc, val) => {
				acc += val.y;
				return acc;
			}, 0);
			if (country === 'all') {
				sentence = 'Total foreign aid provided by the U.S. worldwide since 2017';
				return { sentence, amount };
			} else {
				sentence = `Total foreign aid provided by the U.S. to ${country} since 2017`;
				return { sentence, amount };
			}
		}
	}
	return { sentence: 'loading', amount: 0 };
};

export const makeNumber = (amount) => {
	let val;
	if (amount > 1000000000000) {
		val = (amount / 1000000000000).toFixed(2);
		return `$${Number(val).toLocaleString('en')} Trillion`;
	} else if (amount > 1000000000) {
		val = (amount / 1000000000).toFixed(2);
		return `$${Number(val).toLocaleString('en')} Billion`;
	} else if (amount > 1000000) {
		val = (amount / 1000000).toFixed(2);
		return `$${Number(val).toLocaleString('en')} Million`;
	} else {
		return '$' + amount.toLocaleString('en');
	}
};
