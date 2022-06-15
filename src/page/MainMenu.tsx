import React from 'react';
import { Card, Container, Button, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';
import { BiLogIn } from 'react-icons/bi';

export function MainMenu() {
	return (
		<>
			<div className='d-flex justify-content-around'>
				<div>
					<Header />
				</div>
				<div className='w-25 h-25 text-end'>
					<Link to='/login' className='text-dark text-end w-25 h-25'>
						<BiLogIn className='h-50 w-25' type='button' />
					</Link>
				</div>
			</div>
			<Container
				style={{ width: '70%' }}
				className='position-absolute top-50 start-50 translate-middle '>
				<Row>
					<Col>
						<Link
							to='/onboarding'
							className='d-block text-decoration-none text-body text-center'>
							<Image
								src='https://cdn-icons-png.flaticon.com/512/2534/2534204.png'
								className='rounded mx-auto d-block w-75'
							/>
							<p className='mt-3'>Onboarding</p>
						</Link>
					</Col>
					<Col>
						<Link
							to='/disbursement'
							className='d-block text-decoration-none text-body text-center'>
							<Image
								src='https://cdn-icons-png.flaticon.com/512/2942/2942269.png'
								className='rounded mx-auto d-block w-75'
							/>
							<p className='mt-3'>Disbursement</p>
						</Link>
					</Col>
					<Col>
						<Link
							to='/repayment'
							className='d-block text-decoration-none text-body text-center'>
							<Image
								src='https://cdn-icons-png.flaticon.com/512/1086/1086741.png'
								className='rounded mx-auto d-block w-75'
							/>
							<p className='mt-3'>Re-Payment</p>
						</Link>
					</Col>
					<Col>
						<Link
							to='/preview'
							className='d-block text-decoration-none text-body text-center'>
							<Image
								src='https://cdn-icons-png.flaticon.com/512/2580/2580922.png'
								className='rounded mx-auto d-block w-75'
							/>
							<p className='mt-3'>Preview</p>
						</Link>
					</Col>
				</Row>
			</Container>
		</>
	);
}
