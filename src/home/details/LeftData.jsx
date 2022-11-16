import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function LeftData(props) {
  // console.log(props.data[0].area);
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src="https://flagcdn.com/w320/bd.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default LeftData;
