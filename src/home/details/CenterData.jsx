import { Fragment } from "react";

const CenterData = (props) => {
  const item = props.data;
  return (
    <Fragment>
      {" "}
      <table className="table table-bordered shadow rounded">
        <thead>
          <tr>
            <th colSpan="2">Geography</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Region</td>
            {/* <td>{item.name.common}</td> */}
          </tr>
          <tr>
            <td>Subregion</td>
            <td>{/* {item.name.nativeName.ben.common} */}</td>
          </tr>
          <tr>
            <td>Capital</td>
            {/* <td>{item.name.official}</td> */}
          </tr>
          <tr>
            <td>Demonym</td>
            <td>{/* {item.name.nativeName.ben.official} */}</td>
          </tr>
          <tr>
            <td>Lat/Lng</td>
            <td>{item.name.altSpellings}</td>
          </tr>{" "}
          <tr>
            <td>Area</td>
            <td>{item.name.altSpellings}</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered shadow rounded">
        <thead>
          <tr>
            <th colSpan="2">Language</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Native language</td>
            {/* <td>{item.name.common}</td> */}
          </tr>
          <tr>
            <td>ben</td>
            <td>{/* {item.name.nativeName.ben.common} */}</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default CenterData;
