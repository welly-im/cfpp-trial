import React from 'react';
import {
	Container,
	InputGroup,
	Form,
	Button,
	Table,
	Card,
} from 'react-bootstrap';
import { Header } from '../components/header';
import { ImUpload3 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { useCSVReader } from 'react-papaparse';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { atom, useAtom } from 'jotai';

export const dataJson = atom([]);

export function Disbursement() {
	const { CSVReader } = useCSVReader();
	const [data, setData] = useAtom(dataJson);

	console.log(data);

	return (
		<>
			<Header />
			<Container
				style={{ width: '50%', height: '50%' }}
				className='position-absolute top-50 start-50 translate-middle '>
				<Card>
					<Card.Body>
						<Card.Title>Disbursement</Card.Title>
						<div className='row mt-5 md-5'>
							<div className='col-md-12'>
								<InputGroup className='mb-3 d-grid'>
									<CSVReader
										onUploadAccepted={(results: any) => {
											setData(results.data);
										}}>
										{({
											getRootProps,
											acceptedFile,
											ProgressBar,
											getRemoveFileProps,
										}: any) => (
											<>
												<div className='d-flex gap-2 mb-3'>
													<Form.Control
														placeholder={
															acceptedFile
																? acceptedFile && acceptedFile.name
																: 'Input File Here !'
														}
														className='w-100'
														aria-describedby='basic-addon1'
														{...getRootProps()}
													/>
													<Button variant='danger' {...getRemoveFileProps()}>
														<RiDeleteBin5Line className='h-100' />
													</Button>
													<Button variant='success'>
														<ImUpload3 className='h-100 w-100' type='button' />
													</Button>
												</div>
												<ProgressBar />
											</>
										)}
									</CSVReader>
								</InputGroup>
							</div>
						</div>
					</Card.Body>
				</Card>
				<div>
					<Table bordered hover className='mt-5'>
						<tbody>
							{data.map((item: any) => {
								return (
									<tr key={item[0]}>
										<td>{item[0]}</td>
										<td>{item[1]}</td>
										<td>{item[2]}</td>
										<td>{item[3]}</td>
										<td>{item[4]}</td>
										<td>{item[5]}</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</div>
				<Link to='/home'>
					<Button variant='outline-secondary' id='button-addon2' size='sm'>
						<MdArrowBack /> Back
					</Button>
				</Link>
			</Container>
		</>
	);
}
