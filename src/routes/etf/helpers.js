export const getBarData = async () => {
	const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/etf/`);
	return await response.json();
};

// export const getLineData = async () => {
// 	const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/etf/`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify({
// 			timePeriod: 'month'
// 		})
// 	});
// 	console.log(response);
// };
