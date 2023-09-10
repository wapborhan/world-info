import React, { Fragment } from "react";

const Form = ({ handleFilter }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    handleFilter(selectedValue);
  };
  return (
    <Fragment>
      <div className="container pt-5">
        <div className="search-and-filter container">
          <form className="search-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="search"
              placeholder="Search for a country..."
              value=""
            />
          </form>
          <div className="select-faker">
            <select className="form-select" onChange={handleChange}>
              <option value="all">All</option>
              <option value="americas">Americas </option>
              <option value="europe">Europe </option>
              <option value="africa">Africa </option>
              <option value="oceania">Oceania </option>
            </select>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form;
