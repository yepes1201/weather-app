import React from "react";

export const Search = ({ searchForm, setSearchForm, handleSearch }) => {
  const { city } = searchForm;
  const handleInputForm = (e) => {
    setSearchForm({
      ...searchForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="search__container">
      <div className="search__input-container shadow">
        <i id="search-btn" onClick={handleSearch} className="fas fa-search"></i>
        <input
          onChange={handleInputForm}
          className="search__input"
          id="city-input"
          name="city"
          type="text"
          value={city}
          placeholder="Seoul..."
        />
      </div>
    </div>
  );
};
