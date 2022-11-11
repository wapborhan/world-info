import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function InputForm() {
  return (
    <Form>
      <Form.Group
        className="mb-3 d-flex justify-content-center"
        controlId="formBasicEmail"
      >
        <Form.Control
          type="text"
          className="w-50"
          placeholder="Enter Your Country Name"
        />
        <Button variant="primary" className="w-5 mx-3" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default InputForm;
