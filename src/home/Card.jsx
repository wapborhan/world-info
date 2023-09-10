import React from "react";

import { NavLink } from "react-router-dom";

const CountryCard = (props) => {
  const item = props.data;

  return (
    <div className="card text-center ">
      <NavLink
        to={`/country/${item.name.common}`}
        className="text-decoration-none text-dark"
        onClick={props.selectCountry}
      >
        <div
          style={{ width: "100%" }}
          className="shadow-sm border-2  rounded-md"
        >
          <img
            style={{ height: "170px", width: "100%" }}
            className="border-b-2 p-3"
            src={item.flags.svg}
            alt={item.name.common}
          />
          <div className="space-y-2 p-3">
            <h2 className="text-2xl">{item.name.common}</h2>
            <div>Region: {item.region}</div>
            <div>Capital: {item.capital}</div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default CountryCard;
