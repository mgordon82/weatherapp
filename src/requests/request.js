const BASE_URL = 'http://api.weatherapi.com/v1';
const AUTH_TOKEN = '6eab0621cb164ffd9af165909241601';

const fetchData = async (path, method, params, q) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${path}?key=${AUTH_TOKEN}&q=${q}`,
      {
        method: method ? method : 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: params ? JSON.stringify(params) : null,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;
