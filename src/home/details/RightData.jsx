import { Fragment } from "react";

function RightData(props) {
  const item = props.data;
  return (
    <Fragment>
      <table className="table table-bordered shadow rounded">
        <thead>
          <tr>
            <th colSpan="2">Codes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ISO 3166-1 alpha-2</td>
            {/* <td>{item.name.common}</td> */}
          </tr>
          <tr>
            <td>ISO 3166-1 alpha-3</td>
            <td>{/* {item.name.nativeName.ben.common} */}</td>
          </tr>
          <tr>
            <td>ISO 3166-1 numeric</td>
            {/* <td>{item.name.official}</td> */}
          </tr>
          <tr>
            <td>International calling code</td>
            <td>{/* {item.name.nativeName.ben.official} */}</td>
          </tr>
          <tr>
            <td>ISO 4217 currency code</td>
            <td>{item.name.altSpellings}</td>
          </tr>{" "}
          <tr>
            <td>Top level domain</td>
            <td>{item.name.altSpellings}</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}

export default RightData;
