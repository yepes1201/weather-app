import React from "react";

export const FavoriteCard = React.memo(({ name, sys, main, weather }) => {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  const handleClickModal = () => {
    // setModal(true);
  };
  return (
    <div
      className="favoritecard__container animate__animated animate__fadeIn"
      onClick={handleClickModal}
    >
      <div>
        <p className="favoritecard__location">
          <b>{name}</b>, {regionNames.of(sys.country)}
        </p>
        <span className="favoritecard__temp">{Math.round(main.temp)}ºC</span>
        <br />
        <span className="favoritecard__desc">{weather[0].main}</span>
      </div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="cloudy"
        />
      </div>
    </div>
  );
});
