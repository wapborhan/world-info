import React, { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Main from "./home/Main";
import Details from "./home/details/Details.jsx";
import Footer from "./components/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allcountry: null,
      selectedCountry: null,
    };
  }

  componentDidMount() {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      this.setState({ allcountry: response.data });
    });
  }

  countrySelected = (country) => {
    this.setState({ selectedCountry: country });
  };
  render() {
    return (
      <Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<Main data={this.state.allcountry} />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <Footer />
      </Fragment>
    );
  }
}
