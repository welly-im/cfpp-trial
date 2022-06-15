import React from "react";
import { Card, Container, InputGroup, Form, Row, Col } from "react-bootstrap";
import { Header } from "../components/header";
import { ImUpload3 } from 'react-icons/im';
import { Link } from "react-router-dom";
import { MdArrowBack } from 'react-icons/md';

export function Disbursement() {
    return (
        <>
            <Header/>
            <Container style={{width: "70%", height:"20%", }} className="position-absolute top-50 start-50 translate-middle ">
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
                    <hr className="mb-5"/>
                <Link to ="/home" className="text-dark text-start d-inline-block w-25 mt-5"><MdArrowBack className="h-50 w-25" type="button" /></Link>
            </Container>
        </>
    )
}
