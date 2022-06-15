import React from "react";
import { Card, Container, Button, Row, Col, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import { Header } from "../components/header";

export function MainMenu() {
    return (
        <>
            <Header/>
            <Container style={{width: "70%"}} className="position-absolute top-50 start-50 translate-middle ">
                <Row>
                    <Col>
                        <Link to="/oboarding" className="d-block text-decoration-none text-body text-center">
                            <Image src="https://cdn-icons-png.flaticon.com/512/2534/2534204.png" className="rounded mx-auto d-block w-75" />
                            <p className="mt-3">Onboarding</p>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/disbursement" className="d-block text-decoration-none text-body text-center">
                            <Image src="https://cdn-icons-png.flaticon.com/512/2942/2942269.png" className="rounded mx-auto d-block w-75" />
                            <p className="mt-3">Disbursement</p>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/payment" className="d-block text-decoration-none text-body text-center">
                            <Image src="https://cdn-icons-png.flaticon.com/512/1086/1086741.png" className="rounded mx-auto d-block w-75" />
                            <p className="mt-3">Payment</p>
                            
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/preview" className="d-block text-decoration-none text-body text-center">
                            <Image src="https://cdn-icons-png.flaticon.com/512/2580/2580922.png" className="rounded mx-auto d-block w-75" />
                            
                            <p className="mt-3">Preview</p>

                        </Link>
                    </Col>


                </Row>
            </Container>    
        
        </>
    
)
}
