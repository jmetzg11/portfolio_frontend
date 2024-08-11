export const getAgencyData = async () => {
  const url = `${import.meta.env.VITE_API}/agency`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'applicaiton/json',
      },
    });
    return await response.json();
  } catch (err) {
    console.error('Failed to get agency data', err);
    return 'error';
  }
};
