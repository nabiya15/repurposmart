import React from 'react';
import { Link } from 'react-router-dom';
//import { Navbar } from '../components/Navbar';
import {Homepage} from "./Homepage";
import {Interior} from "./Interior";
import {Kitchen} from "./Kitchen";


export class Exterior extends React.Component {
	// Include a render method 
	render() {
		return (
			<div className="jumbotron">
			<h1 style={{textAlign:"center"}}>Exterior Building Supplies</h1>
			<ul>
			<li><Link to="/">Homepage</Link></li> 
			<li><Link to="/kitchen">Kitchen and Bathroom</Link></li>
			<li><Link to="/interior">Interior Building Supplies</Link></li>
			</ul>

			</div>
			)
	}
}