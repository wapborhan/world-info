import React from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

const CountryCard = (props) => {
  const item = props.data;

  return (
    <div className="col-md-3">
      <NavLink
        to={`/country/${item.name.common}`}
        className="text-decoration-none text-dark"
        onClick={props.selectCountry}
      >
        <Card style={{ width: "100%", marginTop: "20px" }} className="shadow ">
          <Card.Img
            style={{ height: "170px", width: "100%" }}
            variant="top"
            src={item.flags.svg}
          />
          <Card.Body>
            <Card.Title>{item.name.common}</Card.Title>
            <Card.Text>Region: {item.region}</Card.Text>
            <Card.Text>Capital: {item.capital}</Card.Text>
          </Card.Body>
        </Card>
      </NavLink>
    </div>
  );
};

export default CountryCard;
