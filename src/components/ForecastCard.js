import React, { useEffect, useState } from "react";
import { getDayName } from "../helpers/getDayName";

export const ForecastCard = ({ forecastData, forecastIndex }) => {
  const [day, setDay] = useState("");
  useEffect(() => {
    const dayNumber = new Date().getUTCDay();
    const dayName = getDayName(dayNumber + forecastIndex);
    setDay(dayName);
  }, [forecastIndex]);
  return (
    <div className="forecastcard__container animate__animated animate__fadeIn">
      <p className="forecastcard__day">{day}</p>
      <div className="flex flex-column align-center">
        <span className="forecastcard__minmax">Max temp.</span>
        <span className="forecastcard__max-temp">
          {Math.round(forecastData.temp.max)}ºC
        </span>
      </div>
      <div className="flex flex-column align-center">
        <span className="forecastcard__minmax">Min temp.</span>
        <span className="forecastcard__min-temp">
          {Math.round(forecastData.temp.min)}ºC
        </span>
      </div>
      <div className="flex flex-column align-center">
        <img
          className="forecastcard__img"
          src={`http://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`}
          alt="img"
        />
        <span className="forecastcard__minmax forecastcard__status">
          {forecastData.humidity}% Humidity
        </span>
      </div>
    </div>
  );
};
