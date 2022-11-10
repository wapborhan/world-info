import React, { Fragment } from "react";
import Header from "./components/Header";
import Form from "./home/Form";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container pt-3">
        <Form />
      </div>
    </Fragment>
  );
}

export default App;
