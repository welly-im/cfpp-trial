import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { MdOutlineFileUpload, MdArrowBack } from "react-icons/md";

export const Repayment = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <Card className="container" style={{ width: "30rem" }}>
          <Card.Body className="d-flex justify-content-center">
            <Card.Title>Repayment</Card.Title>
          </Card.Body>
          Repayments
          <div className="row">
            <Form.Group controlId="formFile" className="col-10">
              <Form.Control type="file" size="sm" />
            </Form.Group>
            <Button
              variant="outline-secondary"
              id="button-addon2"
              size="sm"
              className="col-1 mb-3"
            >
              <MdOutlineFileUpload />
            </Button>
          </div>
        </Card>
      </div>
      <div
        className="container d-flex justify-content-left mt-3"
        style={{ width: "30rem" }}
      >
        <Button variant="outline-secondary" id="button-addon2" size="sm">
          <MdArrowBack /> Return
        </Button>
      </div>
    </>
  );
};
