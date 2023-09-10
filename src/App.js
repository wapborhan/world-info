import React, { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./home/Main";
import Details from "./home/details/Details.jsx";
import Spinner from "./components/Spinner";
import Footer from "./components/Footer";
// import Form from "./home/Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allcountry: null,
      selectedCountry: null,
      filter: "all",
      region: null,
      data: null,
    };
  }

  componentDidMount() {
    fetch(`https://restcountries.com/v3.1/${this.state.filter}`)
      .then((response) => (response = response.json()))
      .then((data) => {
        this.setState({ allcountry: data });
      });

    fetch(`https://restcountries.com/v3.1/region/${this.state.region}`)
      .then((response) => (response = response.json()))
      .then((data) => {
        this.setState({ data: data });
      });
  }

  countrySelected = (country) => {
    this.setState({ selectedCountry: country });
  };

  handleFilter = (data) => {
    this.setState({ region: data });
  };
  render() {
    console.log(this.state.data);
    return (
      <Fragment>
        <Header />
        {/* <Form handleFilter={this.handleFilter} /> */}
        <Routes>
          <Route
            path="/"
            element={
              this.state.allcountry ? (
                <Main
                  data={this.state.allcountry}
                  selectCountry={this.countrySelected}
                />
              ) : (
                <Spinner />
              )
            }
          />
          <Route
            path="/country/:id"
            element={<Details data={this.state.selectedCountry} />}
          />
        </Routes>
        <Footer />
      </Fragment>
    );
  }
}
