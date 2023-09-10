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
        <div className="main pt-100">
          <div className="container mx-auto px-24">
            <div className="grid grid-cols-4 gap-5">
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
