import React from 'react';
//import Navbar from '../../components/Navbar';
import './Homepage.css';
import { Link } from 'react-router-dom';
import Exterior from '../Exterior/Exterior.js';
import Kitchen from '../Kitchen/Kitchen';
import Interior from '../Interior/Interior.js';

class Homepage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1 style={{ textAlign: 'center' }}>RepurpoSMART homepage</h1>
				<ul>
					<li>
						<Link to="/kitchen">Kitchen and Bathroom</Link>
					</li>
					<li>
						<Link to="/interior">Interior Building Supplies</Link>
					</li>
					<li>
						<Link to="/exterior">Exterior Building Supplies</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Homepage;
