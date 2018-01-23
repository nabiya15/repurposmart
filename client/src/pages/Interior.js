import React from 'react';
import { Link } from 'react-router-dom';
//import { Navbar } from '../components/Navbar';
import {Homepage} from "./Homepage";
import {Exterior} from "./Exterior";
import {Kitchen} from "./Kitchen";

export class Interior extends React.Component {
	// Include a render method 
	render() {
		return (
			<div className="jumbotron">
			<h1 style={{textAlign:"center"}}>Interior Building Supplies</h1>
			<ul>
			<li><Link to="/">Homepage</Link></li> 
			<li><Link to="/kitchen">Kitchen and Bathroom</Link></li>
			<li><Link to="/exterior">Exterior Building Supplies</Link></li>
			</ul>

			</div>
			)
	}
}