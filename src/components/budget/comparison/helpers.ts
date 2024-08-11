export const getComparisonData = async () => {
  const url = `${import.meta.env.VITE_API}/comparison`;
  try {
    // const response = await fetch(url, {
    //   method: 'GET',
    //   headers: {
    //     'content-type': 'applicaiton/json',
    //   },
    // });
    // return await response.json();
    return url;
  } catch (err) {
    console.error('Failed to get agency data', err);
    return 'error';
  }
};
