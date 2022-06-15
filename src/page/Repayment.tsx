import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";
import { ImUpload3 } from "react-icons/im";
import { MdOutlineFileUpload, MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import { Header } from "../components/header";

export const Repayment = () => {
  return (
    <>
      <Header />
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
        <Link to="/home">
          <Button variant="outline-secondary" id="button-addon2" size="sm">
            <MdArrowBack /> Return
          </Button>
        </Link>

        <Container
          style={{ width: "70%", height: "20%" }}
          className="position-absolute top-50 start-50 translate-middle "
        >
          <h3>Disbursement</h3>
          <div className="row mt-5 md-5">
            <div className="col-md-10">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Disbursement"
                  aria-describedby="basic-addon1"
                  type="file"
                />
              </InputGroup>
            </div>
            <div className="col-md-2">
              <ImUpload3 className="h-50 w-50" type="button" />
            </div>
          </div>
          <hr className="mb-5" />
          <Link
            to="/home"
            className="text-dark text-start d-inline-block w-25 mt-5"
          >
            <MdArrowBack className="h-50 w-25" type="button" />
          </Link>
        </Container>
      </div>
    </>
  );
};
