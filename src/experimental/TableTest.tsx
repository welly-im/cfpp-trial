import { useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { MdOutlineFileUpload } from "react-icons/md";

export const TableTest = () => {
	const [CSVFile, setCSVFile] = useState("");

	const handleCSVToJSON = () => {
		console.log("initiated");
	};

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
							<Form.Control
								type="file"
								size="sm"
								onChange={(e: any) => {
									setCSVFile(e.target.files![0]);
								}}
							/>
						</Form.Group>
						<Button
							variant="outline-secondary"
							id="button-addon2"
							size="sm"
							className="col-1 mb-3"
							onClick={handleCSVToJSON}
						>
							<MdOutlineFileUpload />
						</Button>
					</div>
				</Card>
			</div>

			<div className="container w-75">
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td>3</td>
							<td colSpan={2}>Larry the Bird</td>
							<td>@twitter</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</>
	);
};
