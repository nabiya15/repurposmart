import React from 'react';
import { Link } from 'react-router-dom';
//import { Navbar } from '../components/Navbar';
import {Homepage} from "./Homepage";
import {Interior} from "./Interior";
import {Exterior} from "./Exterior";

export class Kitchen extends React.Component {
	// Include a render method 
	render() {
		return (
			<div className="jumbotron">
			<h1 style={{textAlign:"center"}}>Kitchen & Bathroom</h1>
			<ul>
			<li><Link to="/">Homepage</Link></li> 
			<li><Link to="/interior">Interior Building Supplies</Link></li>
			<li><Link to="/exterior">Exterior Building Supplies</Link></li>
			</ul>

			</div>
			)
	}
}