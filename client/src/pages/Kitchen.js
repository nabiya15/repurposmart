import React from 'react';
import { Navbar } from '../components/Navbar';

export class Kitchen extends React.Component {
	// Include a render method 
	render() {
		return (
			<div className="jumbotron">
				<h1 style={{textAlign:"center"}}>Kitchen & Bathroom</h1>
				<Navbar />
			</div>
		)
	}
}