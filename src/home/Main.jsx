import React from "react";
import LeftData from "./LeftData";
import RightData from "./RightData";
const Main = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"> {/* <LeftData data={props.data} /> */}</div>
        <div className="col-md-8">
          <RightData />
        </div>
      </div>
    </div>
  );
};

export default Main;
