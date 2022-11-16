import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CountryCard from "./Card";
import Spinner from "../components/Spinner";

const Main = (props) => {
  return (
    <Fragment>
      <div className="container pt-5">
        <Form className="pb-4">
          <Form.Group
            className="mb-3 d-flex justify-content-center"
            controlId="formBasicEmail"
          >
            <Form.Control
              type="text"
              className="w-50"
              placeholder="Enter Your Country Name"
            />
            <Button variant="primary" className="w-5 mx-3" type="submit">
              Search
            </Button>
          </Form.Group>
        </Form>
        {props.data ? <CountryCard data={props.data} /> : <Spinner />}
      </div>
    </Fragment>
  );
};

export default Main;
