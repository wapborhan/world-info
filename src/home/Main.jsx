import React, { Component, Fragment } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CountryCard from "./Card";
import Spinner from "../components/Spinner";

const Main = (props) => {
  // console.log(props);
  return (
    <Fragment>
      <div className="container pt-5">
        <div class="search-and-filter container">
          <form class="search-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
            <div class="title">
              <p> Filter by region </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-down"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {props.data.map((item) => {
              return (
                <CountryCard
                  data={item}
                  selectCountry={() => {
                    props.selectCountry(item);
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
};

export default Main;
