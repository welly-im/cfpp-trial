import React, { useState } from 'react';
import { Container, InputGroup, Form, Button, Table } from 'react-bootstrap';
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
	const [_handleBug, set_handleBug] = useState(false);

	console.log(data);
	console.log(_handleBug);

	return (
		<>
			<Header />
			<Container
				style={{ width: '60%', height: '50%' }}
				className='position-absolute top-50 start-50 translate-middle '>
				<h3>Disbursement</h3>
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
											<Button
												variant='outline-secondary'
												className='w-100'
												aria-describedby='basic-addon1'
												{...getRootProps()}>
												{acceptedFile
													? acceptedFile && acceptedFile.name
													: 'Input File Here !'}
											</Button>
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
				<hr className='mb-5' />
				<div>
					<Table striped bordered hover>
						<thead>
							{data.map((item: any, index) => {
								if (index === 0)
									return (
										<>
											<tr key={item[0]}>
												<th>{item[0]}</th>
												<th>{item[1]}</th>
												<th>{item[2]}</th>
												<th>{item[3]}</th>
												<th>{item[4]}</th>
												<th>{item[5]}</th>
											</tr>
										</>
									);
								else return '';
							})}
						</thead>
						<tbody>
							{data.map((item: any, index) => {
								if (index === 0) return '';
								else
									return (
										<>
											<tr key={item[0]}>
												<td>{item[0]}</td>
												<td>{item[1]}</td>
												<td>{item[2]}</td>
												<td>{item[3]}</td>
												<td>{item[4]}</td>
												<td>{item[5]}</td>
											</tr>
										</>
									);
							})}
						</tbody>
					</Table>
					<Table bordered hover>
						<tbody></tbody>
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
