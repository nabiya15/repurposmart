import React from 'react';
import { Link } from 'react-router-dom';
//import { Navbar } from '../components/Navbar';
import {Exterior} from "./Exterior";
import {Interior} from "./Interior";
import {Kitchen} from "./Kitchen";


export class Homepage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
			<h1 style={{textAlign:"center"}}>RepurpoSMART homepage</h1>
			<ul>
			<li><Link to="/kitchen">Kitchen and Bathroom</Link></li>
			<li><Link to="/interior">Interior Building Supplies</Link></li>
			<li><Link to="/exterior">Exterior Building Supplies</Link></li>
			</ul>

			</div>
			)
	}
}