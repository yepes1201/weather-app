import React, { useState } from "react";
import { getCity } from "../helpers/api";
import { Result } from "./Result";
import { Search } from "./Search";

export const Home = ({ handleBtnMenuClick, setModal }) => {
  const [searchForm, setSearchForm] = useState({
    city: "",
  });
  const [cityData, setCityData] = useState({});
  const closed = <i className="fas fa-bars"></i>;

  const handleSearch = () => {
    getCity(searchForm.city).then((data) => {
      setCityData(data);
    });
  };

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
    </div>
  );
};
