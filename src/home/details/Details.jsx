import React from "react";

const Details = (props) => {
  const item = props.data;
  console.log(props.data);
  return <img src={item.flags.svg}></img>;
};

export default Details;
