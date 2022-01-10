import React, { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { CityData } from "./CityData";

export const Result = React.memo(({ cityData }) => {
  const favoriteContext = useContext(FavoriteContext);
  const { favoriteCities, setFavoriteCities } = favoriteContext;
  const added = (
    <>
      <i className="far fa-heart"></i> Add to Favorites
    </>
  );
  const notAdded = (
    <>
      <i className="fas fa-heart"></i> Remove from Favorites
    </>
  );

  const handleFavorites = () => {
    if (!favoriteCities.includes(cityData.id)) {
      setFavoriteCities((fav) => {
        return [...fav, cityData.id];
      });
    } else {
      const arr = favoriteCities.filter((id) => {
        return id !== cityData.id;
      });
      setFavoriteCities(arr);
    }
  };

  if (cityData.err) {
    return (
      <div className="advice error animate__animated animate__fadeIn">
        <i
          style={{ fontSize: "2rem", marginBottom: ".5rem" }}
          className="fas fa-exclamation-circle"
        ></i>
        <br />
        <p>
          Oops... something went wrong.
          <br /> Try again.
        </p>
      </div>
    );
  }

  return (
    <>
      {cityData.id ? (
        <CityData {...cityData} />
      ) : (
        <div className="advice animate__animated animate__fadeIn">
          <i
            style={{ fontSize: "2rem", marginBottom: ".5rem" }}
            className="fas fa-globe-asia"
          ></i>
          <br />
          <p>Try looking something up there</p>
        </div>
      )}
      {cityData.id && (
        <button onClick={handleFavorites} className="citydata__add-btn shadow">
          {favoriteCities.includes(cityData.id) ? notAdded : added}
        </button>
      )}
    </>
  );
});
