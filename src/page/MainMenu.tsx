import React from "react";
import { Card, Container, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export function MainMenu() {
    return (
    <Container style={{width: "70%"}} className="position-absolute top-50 start-50 translate-middle ">
        <Card>
            <Card.Body className="d-grid gap-2">
                <Card.Title>Main Menu</Card.Title>
                <Link to="/preview" className="d-grid gap-2"><Button className="ms-3 me-3 mt-3"> Preview </Button></Link>
                <Link to="/input" className="d-grid gap-2"><Button className="ms-3 me-3 mt-3"> Apply Fee </Button></Link>
                <Link to="/jotai" className="d-grid gap-2"><Button className="ms-3 me-3 mt-3"> Payment </Button></Link>
                <Link to="/upload" className="d-grid gap-2"><Button className="ms-3 me-3 mt-3"> Upload </Button></Link>
            </Card.Body>
        </Card>
    </Container>    
)
}
