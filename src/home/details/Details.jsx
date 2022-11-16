import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import LeftData from "./LeftData";
import CenterData from "./CenterData";
import RightData from "./RightData";

const Details = (props) => {
  const item = props.data;

  return (
    <Fragment>
      <div className="container">
        <div className="row pt-3">
          <div className="col-lg-12">
            <div className="card p-2 mt-5  mb-3">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {item.name.common}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <LeftData data={props.data} />
          </div>
          <div className="col-md-4">{/* <CenterData /> */}</div>
          <div className="col-md-4">{/* <RightData /> */}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Details;
