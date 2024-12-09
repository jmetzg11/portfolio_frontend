export const getBarData = async () => {
	const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/etf/reserves`);
	const rsp = await response.json();
	return rsp.reserves;
};

export const getLineData = async () => {
	const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/etf/stocks`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			timePeriod: 'month'
		})
	});
	console.log(response);
};
