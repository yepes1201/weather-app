import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router";

import { Result } from "./Result";
import { Search } from "./Search";

import { getCity } from "../helpers/api";

export const Home = ({ handleBtnMenuClick, setModal }) => {
  const { city } = useParams();
  const navigate = useNavigate();
  const [searchForm, setSearchForm] = useState({
    city: city || "",
  });
  const [cityData, setCityData] = useState({});
  const closed = <i className="fas fa-bars"></i>;

  const handleSearch = () => {
    navigate(`/search/${searchForm.city}`);
  };

  useEffect(() => {
    if (city) {
      getCity(city).then((data) => {
        setCityData(data);
      });
    }
  }, [city]);

  return (
    <div className="home__container">
      <div className="home__header">
        <h3>Weather App</h3>
        <p onClick={() => setModal(true)}>Def. City</p>
        <div
          onClick={handleBtnMenuClick}
          id="menu-btn"
          className="home__menu-btn"
        >
          {closed}
        </div>
      </div>
      <div className="home__data-container">
        <Search
          searchForm={searchForm}
          setSearchForm={setSearchForm}
          handleSearch={handleSearch}
        />
        <Result cityData={cityData} />
      </div>
      <footer>
        <p className="footer__data">
          Data provided by{" "}
          <a
            target="_blank"
            href="https://openweathermap.org/"
            rel="noreferrer noopener"
          >
            OpenWeatherMap
          </a>
        </p>
        <p>© Daniel Yepes {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};
