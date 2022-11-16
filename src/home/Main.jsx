import React, { Component, Fragment } from "react";
import CountryCard from "./Card";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="container pt-5">
          {/* <div class="search-and-filter container">
            <form class="search-bar">
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
                class="feather feather-search"
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
            <div class="select-faker">
              <select value={this.state.fruit} onChange={this.handleChange}>
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div> */}
          <div className="container">
            <div className="row">
              {this.props.data.map((item) => {
                return (
                  <CountryCard
                    data={item}
                    selectCountry={() => {
                      this.props.selectCountry(item);
                    }}
                    key={Math.random()}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
