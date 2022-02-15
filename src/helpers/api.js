export const getCity = async (city) => {
  try {
    const url = `https://bend-wapp.herokuapp.com/city/${city}`;
    const resp = await fetch(url);
    return await resp.json();
  } catch (err) {
    return {
      err: true,
    };
  }
};

export const getForecast = async (lat, lon) => {
  try {
    const url = `https://bend-wapp.herokuapp.com/forecast?lat=${lat}&lon=${lon}`;
    const data = await fetch(url);
    return await data.json();
  } catch (err) {
    return {
      err: true,
    };
  }
};

export const getCityByID = async (id) => {
  try {
    const url = `https://bend-wapp.herokuapp.com/id/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return {
      id: data.id,
      name: data.name,
      main: data.main,
      sys: data.sys,
      weather: data.weather,
      err: data.cod === 200 ? false : true,
    };
  } catch (err) {
    return {
      err: true,
    };
  }
};
