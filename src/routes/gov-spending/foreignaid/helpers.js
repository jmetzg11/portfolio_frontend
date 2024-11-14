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
		return { mapData: data.mapData, countries: data.countries };
	} catch (error) {
		console.error('Error fetching data:', error);
		return null;
	}
};

export const fetchBarData = async (country) => {
	console.log('i was called');
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
		return data.barData;
	} catch (error) {
		console.error('Error fetching data:', error);
		return null;
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
