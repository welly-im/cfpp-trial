import React from "react";
import { Tabs, Tab, Container, Card, Table, Button} from "react-bootstrap";
import { Header } from "../components/header";
import { Link } from "react-router-dom";
import { MdArrowBack } from 'react-icons/md';

export function Preview() {
    return (
        <>
            <Header/>
            <Container style={{width: "70%", height: "80%"}} className="position-absolute top-50 start-50 translate-middle mt-5">
                        <Tabs
                        defaultActiveKey="CIFA"
                        transition={true}
                        id="noanim-tab-example"
                        className="mb-3"
                        >
                            <Tab eventKey="CIFA" title="Onboarding - CIF & Account">
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Nick Name</th>
                                        <th>Approval</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Giacomo Guilizzoni</td>
                                        <td>40</td>
                                        <td>Peldi</td>
                                        <td className="d-flex justify-content-evenly">
                                            <Button variant="primary">Accept</Button>  <Button variant="danger">Reject</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Marco Botton</td>
                                        <td>38</td>
                                        <td></td>
                                        <td className="d-flex justify-content-evenly">
                                            <Button variant="primary">Accept</Button>  <Button variant="danger">Reject</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mariah Maclachlan</td>
                                        <td>41</td>
                                        <td>Potata</td>
                                        <td className="d-flex justify-content-evenly">
                                            <Button variant="primary">Accept</Button>  <Button variant="danger">Reject</Button>
                                        </td>
                                    </tr>
                                </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="CA" title="Onboarding - Credit Arrangement">
                            <>
                                Haloo 2
                                </>
                            </Tab>
                            <Tab eventKey="Disbursement" title="Disbursement">
                            <>
                            Disbursement
                                </>
                            </Tab>
                            <Tab eventKey="Repayment" title="Re-Payment">
                            <>
                            Re-Payment
                                </>
                            </Tab>
                        </Tabs>
                        <Link to ="/home" className="text-dark text-start d-inline-block w-25 mt-5"><MdArrowBack className="h-50 w-25" type="button" /></Link>
            </Container>
        </>
    );
}
