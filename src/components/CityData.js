import React, { useEffect, useState } from "react";
import { getForecast } from "../helpers/api";
import { ForecastCard } from "./ForecastCard";
import { LoadingWheel } from "./LoadingWheel";

export const CityData = ({ coord, main, name, sys, weather }) => {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  useEffect(() => {
    getForecast(coord.lat, coord.lon).then((data) => {
      setForecast(data);
      setLoading(false);
    });
  }, [coord.lat, coord.lon]);

  return (
    <div className="citydata animate__animated animate__fadeIn">
      <div className="citydata__container shadow">
        <div className="citydata__header">
          <div className="citydata__data-header">
            <p className="citydata__city-name">
              <b>{name}</b>, {regionNames.of(sys.country)}
            </p>
            <span className="citydata__city-temp">
              {Math.round(main.temp)}ºC
            </span>
            <br />
            <span className="citydata__city-weather">{weather[0].main}</span>
            <br />
            <p className="citydata__city-desc">{main.humidity}% of humidity</p>
          </div>
          <img
            className="citydata__img"
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="img"
          />
        </div>
        <div className="citydata__forecast">
          <p className="citydata__forecast-title">3 Day Forecast</p>
          <div className="citydata__daily">
            {loading ? (
              <LoadingWheel />
            ) : (
              forecast.map((data, i) => {
                return (
                  <ForecastCard
                    forecastData={data}
                    key={data.dt}
                    forecastIndex={i}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
