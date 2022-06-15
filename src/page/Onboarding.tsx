import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { MdOutlineFileUpload, MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import { Header } from "../components/header";

export const Onboarding = () => {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center mt-5">
        <Card className="container" style={{ width: "30rem" }}>
          <Card.Body className="d-flex justify-content-center">
            <Card.Title>Onboarding</Card.Title>
          </Card.Body>
          <div className="ms-2">CIF & Account Creation</div>
          <div className="row">
            <Form.Group controlId="formFile" className="col-10 ms-2">
              <Form.Control type="file" size="sm" />
            </Form.Group>
            <Button
              variant="outline-primary"
              id="button-addon2"
              size="sm"
              className="col-1"
            >
              <MdOutlineFileUpload />
            </Button>
          </div>
          <hr />
          <div className="ms-2">Credit arrangement</div>
          <div className="row">
            <Form.Group controlId="formFile" className="col-10 ms-2">
              <Form.Control type="file" size="sm" />
            </Form.Group>
            <Button
              variant="outline-primary"
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
        <Link to="/home">
          <Button variant="outline-secondary" id="button-addon2" size="sm">
            <MdArrowBack /> Return
          </Button>
        </Link>
      </div>
    </>
  );
};
