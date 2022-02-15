import React, { useCallback, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";

import { Home } from "./components/Home";
import { Modal } from "./components/Modal";
import { Sidebar } from "./components/Sidebar";

import { FavoriteContext } from "./context/FavoriteContext";

import { responsiveSidebar, setOverflowBody } from "./helpers/helpers";

import "./styles/styles.css";

export const App = () => {
  const [favoriteCities, setFavoriteCities] = useState(
    JSON.parse(localStorage.getItem("favCities")) || []
  );
  const [defaultCity, setDefaultCity] = useState(
    JSON.parse(localStorage.getItem("defaultCity")) || ""
  );
  const [modal, setModal] = useState(defaultCity.length === 0 ? true : false);

  const saveData = useCallback((data) => {
    localStorage.setItem("favCities", JSON.stringify(data));
  }, []);

  // Set Modal status
  useEffect(() => {
    setOverflowBody(modal);
  }, [modal]);

  return (
    <FavoriteContext.Provider
      value={{
        favoriteCities,
        setFavoriteCities,
        saveData,
      }}
    >
      <div>
        <div className="app__container animate__animated animate__fadeIn">
          <Sidebar
            handleBtnMenuClick={responsiveSidebar}
            defaultCity={defaultCity}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleBtnMenuClick={responsiveSidebar}
                  setModal={setModal}
                />
              }
            />
            <Route
              path="/search/:city"
              element={
                <Home
                  handleBtnMenuClick={responsiveSidebar}
                  setModal={setModal}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          {modal && (
            <Modal setModal={setModal} setDefaultCity={setDefaultCity} />
          )}
        </div>
      </div>
    </FavoriteContext.Provider>
  );
};
