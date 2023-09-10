import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import LeftData from "./LeftData";
import CenterData from "./CenterData";
import RightData from "./RightData";

const Details = (props) => {
  const item = props.data;

  return (
    <Fragment>
      <div className="container mx-auto px-24">
        <div className=" py-8">
          <div className="col-lg-12">
            <div className="border-2 rounded ">
              <nav className="px-10 py-2 justify-start">
                <ol class="flex gap-3">
                  <li class="breadcrumb-item">
                    <NavLink to="/" className="text-green-500">
                      Home
                    </NavLink>
                  </li>
                  {" / "}
                  <li class="breadcrumb-item active" aria-current="page">
                    {item.name.common}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-7">
          <div className="left">
            <LeftData data={props.data} />
          </div>
          <div className="center">
            <CenterData data={props.data} />{" "}
          </div>
          <div className="right">
            <RightData data={props.data} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Details;
