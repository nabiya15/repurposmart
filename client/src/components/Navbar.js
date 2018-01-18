import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<ul>
			<li><Link to="/">Homepage</Link></li> 
			<li><Link to="/kitchen">Kitchen and Bathroom</Link></li>
			<li><Link to="/interior">Interior Building Supplies</Link></li>
			<li><Link to="/exterior">Exterior Building Supplies</Link></li>
		</ul>
	)
}