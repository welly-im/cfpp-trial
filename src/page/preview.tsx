import React from 'react';
import { Tabs, Tab, Container, Table, Button } from 'react-bootstrap';
import { Header } from '../components/header';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { dataJson } from './Disbursement';
import { useAtom } from 'jotai';

export function Preview() {
	const [data, setData] = useAtom(dataJson);
	console.log(data);
	return (
		<>
			<Header />
			<Container
				style={{ width: '70%', height: '80%' }}
				className='position-absolute top-50 start-50 translate-middle mt-5'>
				<Tabs
					defaultActiveKey='CIFA'
					transition={true}
					id='noanim-tab-example'
					className='mb-3'>
					<Tab eventKey='CIFA' title='Onboarding - CIF & Account'>
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
									<td className='d-flex justify-content-evenly'>
										<Button variant='primary'>Accept</Button>
										<Button variant='danger'>Reject</Button>
									</td>
								</tr>
								<tr>
									<td>Marco Botton</td>
									<td>38</td>
									<td></td>
									<td className='d-flex justify-content-evenly'>
										<Button variant='primary'>Accept</Button>
										<Button variant='danger'>Reject</Button>
									</td>
								</tr>
								<tr>
									<td>Mariah Maclachlan</td>
									<td>41</td>
									<td>Potata</td>
									<td className='d-flex justify-content-evenly'>
										<Button variant='primary'>Accept</Button>{' '}
										<Button variant='danger'>Reject</Button>
									</td>
								</tr>
							</tbody>
						</Table>
					</Tab>
					<Tab eventKey='CA' title='Onboarding - Credit Arrangement'>
						<>Haloo 2</>
					</Tab>
					<Tab eventKey='Disbursement' title='Disbursement'>
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
					</Tab>
					<Tab eventKey='Repayment' title='Re-Payment'>
						<>Re-Payment</>
					</Tab>
				</Tabs>
				<Link to='/home'>
					<Button variant='outline-secondary' id='button-addon2' size='sm'>
						<MdArrowBack /> Back
					</Button>
				</Link>
			</Container>
		</>
	);
}
