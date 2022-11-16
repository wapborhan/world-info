import React, { Component, Fragment } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: "banana",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("Fruit Selected!!");
    this.setState({ fruit: e.target.value });
  }
  render() {
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
              <select
                className="form-select"
                aria-label="Default select example"
                value={this.state.fruit}
                onChange={this.handleChange}
              >
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
  }
}
