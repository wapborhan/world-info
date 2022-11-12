import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = (props) => {
  console.log(props.data);
  return (
    <div className="container">
      <div className="row">
        {props.data.map((item) => {
          return (
            <div className="col-md-3">
              <Card
                style={{ width: "100%", marginTop: "20px" }}
                className="shadow "
              >
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
