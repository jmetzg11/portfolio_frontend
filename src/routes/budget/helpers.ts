export const getData = async (endpoint: string) => {
  const url = `${import.meta.env.VITE_API}/${endpoint}`;
  try {
    let response;
    if (['budget', 'comparison', 'info'].includes(endpoint)) {
      console.log('get request: ', url);
      response = await fetch(url, {
        method: 'GET',
        headers: {
          'content-Type': 'application/json',
        },
      });
    } else {
      console.log('post request', url);
      response = await fetch(url, {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify({ key: 'some body data' }),
      });
    }

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error('Failed to get budget data', err);
    return 'error';
  }
};
