export const normalizeData = (data, year) => {
	let filteredData;
	if (year !== 'all') {
		filteredData = data.filter((item) => item.year === year);
	} else {
		filteredData = data;
	}

	let combinedData = {};
	filteredData.forEach((item) => {
		const location = item.location;
		if (location in combinedData) {
			combinedData[location]['text'] += `, ${item.text}`;
			combinedData[location]['value'] += item.value;
			combinedData[location]['color'] = colors[2024 - item.year];
			combinedData[location]['years'] += `, ${item.year}`;
		} else {
			combinedData[location] = {
				...item,
				color: colors[2024 - item.year],
				years: `${item.year}`
			};
		}
	});

	const resultArray = Object.values(combinedData);
	const maxValue = Math.max(...resultArray.map((item) => item.value));
	const minValue = Math.min(...resultArray.map((item) => item.value));
	const minRange = 4;
	const maxRange = 40;
	const weight = 3;

	return resultArray.map((item) => {
		const normalizedValue =
			((parseFloat(item.value) - minValue) / (maxValue - minValue + weight)) *
				(maxRange - minRange) +
			minRange;
		return {
			...item,
			normalizedValue
		};
	});
};

export const colors = [
	'#fcab8f',
	'#fc9c7d',
	'#fc8e6e',
	'#fc8060',
	'#fb7252',
	'#f96346',
	'#f5523a',
	'#f14130',
	'#e83429',
	'#db2824',
	'#cf1c1f',
	'#c1161b',
	'#b31218',
	'#a60f15',
	'#920a13',
	'#7c0510',
	'#67000d'
];
