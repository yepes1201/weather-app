import React, { useState } from "react";

export const Modal = ({ setModal, setDefaultCity }) => {
  const [inputCity, setInputCity] = useState("");

  const handleCloseModal = () => {
    if (inputCity.length !== 0) {
      localStorage.setItem("defaultCity", JSON.stringify(inputCity));
      setDefaultCity(inputCity);
      setModal(false);
    } else {
      errorCloseModal();
    }
  };

  const errorCloseModal = () => {
    if (localStorage.getItem("defaultCity")) return setModal(false);
    const inputModal = document.getElementById("cityModal");
    inputModal.style.outline = "2px solid red";
  };

  const handleInput = ({ target }) => {
    setInputCity(target.value);
  };

  return (
    <div
      className="modal__overlay animate__animated animate__fadeIn"
      onClick={errorCloseModal}
    >
      <div
        className="modal__container shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Default City</h2>
        <p>
          This city will be displayed always on the top of the sidebar and every
          10 minutes the weather will be updated.
        </p>
        <hr />
        <div>
          <input
            className="shadow"
            type="text"
            name="city"
            placeholder="Busan..."
            id="cityModal"
            onChange={handleInput}
          />
          <button onClick={handleCloseModal} className="shadow">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
