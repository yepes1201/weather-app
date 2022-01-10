import React, { memo, useContext, useEffect, useState } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { getCity, getCityByID } from "../helpers/api";
import { getTime } from "../helpers/getTime";
import { FavoriteCard } from "./FavoriteCard";

export const Sidebar = memo(({ handleBtnMenuClick, defaultCity }) => {
  const { favoriteCities, saveData } = useContext(FavoriteContext);
  const [favCityData, setFavCityData] = useState([]);
  const [defaultCityData, setDefaultCityData] = useState({});
  const [time, setTime] = useState(getTime());
  const seconds = new Date().getSeconds();

  // Time Update
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime(getTime());
    }, 60000 - seconds * 1000);
    return () => clearInterval(timerInterval);
  }, [seconds]);

  // Default City
  useEffect(() => {
    getCity(defaultCity).then((data) => setDefaultCityData(data));
  }, [defaultCity, setDefaultCityData]);

  // Default City Update
  useEffect(() => {
    const defCityInterval = setInterval(() => {
      getCity(defaultCity).then((data) => setDefaultCityData(data));
    }, 600000);
    return () => clearInterval(defCityInterval);
  }, [defaultCity, setDefaultCityData]);

  // Load favorite cities
  useEffect(() => {
    const arrPromise = favoriteCities.map(async (cityID) => {
      return await getCityByID(cityID);
    });
    Promise.all(arrPromise).then((data) => {
      setFavCityData(data);
    });
    saveData(favoriteCities);
  }, [favoriteCities, saveData]);

  return (
    <aside id="sidebar" className="sidebar__container">
      <div className="sidebar__menu-btn">
        <p className="sidebar__time">{time}</p>
        <div></div>
        <div onClick={handleBtnMenuClick} className="sidebar__btn">
          <i className="fas fa-times"></i>
        </div>
      </div>
      <div className="sidebar__header">
        <br />
        <span className="sidebar__temp">
          {defaultCityData.main?.temp
            ? Math.round(defaultCityData.main?.temp)
            : "--"}
          ºC
        </span>
        <p className="sidebar__location">
          {defaultCityData.name || "..."},{" "}
          {defaultCityData.sys?.country || "..."}
        </p>
        <hr></hr>
      </div>

      <div className="sidebar__favorites-container">
        {favoriteCities.length !== 0 ? (
          favCityData.map((city, i) => (
            <FavoriteCard key={i + city.id} {...city} />
          ))
        ) : (
          <div className="sidebar__alert">
            <p>You have no favorite cities.</p>
          </div>
        )}
      </div>
    </aside>
  );
});
