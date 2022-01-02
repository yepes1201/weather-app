export const getCity = async (city) => {
  try {
    const API_KEY = "c7873dea79cebbec8325b44094a116f4";
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city}&units=metric`;
    const resp = await fetch(url);
    const data = await resp.json();
    return {
      id: data.id,
      name: data.name,
      coord: data.coord,
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

export const getForecast = async (lat, lon) => {
  try {
    const API_KEY = "c7873dea79cebbec8325b44094a116f4";
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}&units=metric`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data.daily.slice(0, 3);
  } catch (err) {
    console.log(err);
  }
};

export const getCityByID = async (id) => {
  try {
    const API_KEY = "c7873dea79cebbec8325b44094a116f4";
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&id=${id}&units=metric`;
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
