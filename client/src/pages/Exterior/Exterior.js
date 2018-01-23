import React from 'react';
//import Navbar from '../../components/Navbar';
import ItemCard from '../../components/ItemCard';
import items from '../../exteriorItems.json';
import { Link } from 'react-router-dom';
import Homepage from "../Homepage/Homepage";
import Kitchen from "../Kitchen/Kitchen";
import Interior from "../Interior/Interior";

import './Exterior.css';

class Exterior extends React.Component {
	// Setting this.state.items to the exteriorItems json array
	state = {
		items
	};

	render() {
		return (
			<div>
				<div className="jumbotron">
					<h1 style={{ textAlign: 'center' }}>
						Exterior Building Supplies
					</h1>
					<ul>
						<li>
							<Link to="/">Homepage</Link>
						</li>
						<li>
							<Link to="/kitchen">Kitchen and Bathroom</Link>
						</li>
						<li>
							<Link to="/interior">
								Interior Building Supplies
							</Link>
						</li>
					</ul>
				</div>

				{/* Map over this.state.items and render an ItemCard component for each item object */}
				{this.state.items.map(item => (
					<ItemCard
						id={item.id}
						key={item.id}
						title={item.title}
						image={item.image}
						price={item.price}
						seller={item.seller}
					/>
				))}
			</div>
		);
	}
}

export default Exterior;
