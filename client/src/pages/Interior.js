import React from 'react';
import { Navbar } from '../components/Navbar';

export class Interior extends React.Component {
	// Include a render method 
	render() {
		return (
			<div className="jumbotron">
				<h1 style={{textAlign:"center"}}>Interior Building Supplies</h1>
				<Navbar />
			</div>
		)
	}
}