import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function InputForm() {
  return (
    <Form>
      <Form.Group
        className="mb-3 d-flex justify-cotent-between"
        controlId="formBasicEmail"
      >
        <Form.Control type="text" placeholder="Enter Your Country Name" />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default InputForm;
