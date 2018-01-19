import React from 'react';
import { Navbar } from '../components/Navbar';

export class Homepage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1 style={{textAlign:"center"}}>RepurpoSMART homepage</h1>
				<Navbar />
			</div>
		)
	}
}