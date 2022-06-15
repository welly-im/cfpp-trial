import React from "react";
import { Tabs, Tab, Container, Card} from "react-bootstrap";

export function Preview() {
    return (
        <>
            <Container style={{width: "70%", height: "80%"}} className="position-absolute top-50 start-50 translate-middle ">
                <Card>
                    <Card.Body className="d-grid gap-2">
                        <Tabs
                        defaultActiveKey="CIFA"
                        transition={true}
                        id="noanim-tab-example"
                        className="mb-3"
                        >
                            <Tab eventKey="CIFA" title="Onboarding - CIF & Account">
                                <>
                                Haloo
                                </>
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
                    </Card.Body>
                </Card>

            </Container>
        </>
    );
}
