import React from 'react';
import { Navbar } from '../components/Navbar';

export class Exterior extends React.Component {
	// Include a render method 
	render() {
		return (
			<div className="jumbotron">
				<h1 style={{textAlign:"center"}}>Exterior Building Supplies</h1>
				<Navbar />
			</div>
		)
	}
}