import React, { Component, Fragment } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./home/Main";
import Home from "./home/Home";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allcountry: "",
      country: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://restcountries.com/v3.1/name/bangladesh")
      .then((response) => {
        this.setState({ country: response.data });
      });

    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      this.setState({ allcountry: response.data });
    });
  }

  render() {
    // console.log(this.state.country);
    return (
      <Fragment>
        <Header />
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
          <Home data={this.state.allcountry} />
          <Main data={this.state.country} />
        </div>
        <Footer />
      </Fragment>
    );
  }
}
