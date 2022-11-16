import { Fragment } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function LeftData(props) {
  const item = props.data;
  console.log(props.data);

  return (
    <Fragment>
      {" "}
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={item.flags.svg} />
      </Card>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th colSpan="2">Names</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Common</td>
            <td>{item.name.common}</td>
          </tr>
          <tr>
            <td>Common (Native)</td>
            <td>{/* {item.name.nativeName.ben.common} */}</td>
          </tr>
          <tr>
            <td>Official</td>
            <td>{item.name.official}</td>
          </tr>
          <tr>
            <td>Official (Native)</td>
            <td>{/* {item.name.nativeName.ben.official} */}</td>
          </tr>
          <tr>
            <td>Alternative spellings</td>
            <td>{item.name.altSpellings}</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}

export default LeftData;
