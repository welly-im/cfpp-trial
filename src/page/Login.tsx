import { Button, Card, Form, InputGroup } from "react-bootstrap";
export const Login = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <Card className="container" style={{ width: "30rem" }}>
          <div className="d-flex justify-content-center mt-3">
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Aladin.png"
              style={{ width: "15rem" }}
            />
          </div>
          <Card.Body className="d-flex justify-content-center">
            <Card.Title>Tactical Invoice System</Card.Title>
          </Card.Body>

          <InputGroup className="mb-3">
            <Form.Control placeholder="Username" aria-label="username" />
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Password"
              aria-label="password"
              type="password"
            />
          </InputGroup>
          <Button variant="primary mb-3">Login</Button>
        </Card>
      </div>
    </>
  );
};
