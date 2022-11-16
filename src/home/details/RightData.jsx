import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function RightData() {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Header>
        <Card.Title>Details</Card.Title>
      </Card.Header>
      <Card.Body className="p-0">
        <ListGroup variant="flush">
          <ListGroup.Item action>
            <div className="d-flex justify-content-between">
              <h6>Capital</h6>
              <h6>Dhaka</h6>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action variant="secondary">
            <div className="d-flex justify-content-between">
              <h6>Capital</h6>
              <h6>Dhaka</h6>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex justify-content-between">
              <h6>Capital</h6>
              <h6>Dhaka</h6>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action variant="secondary">
            <div className="d-flex justify-content-between">
              <h6>Capital</h6>
              <h6>Dhaka</h6>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default RightData;
