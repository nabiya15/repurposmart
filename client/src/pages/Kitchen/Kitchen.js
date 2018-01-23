import React from 'react';
//import Navbar from '../../components/Navbar';
import ItemCard from '../../components/ItemCard';
import items from '../../kitchenItems.json';
import './Kitchen.css';
import { Link } from 'react-router-dom';
import Exterior from '../Exterior/Exterior.js';
import Homepage from '../Homepage/Homepage';
import Interior from '../Interior/Interior.js';

class Kitchen extends React.Component {
	// Setting this.state.items to the kitchenItems json array
	state = {
		items
	};

	render() {
		return (
			<div>
				<div className="jumbotron">
					<h1 style={{ textAlign: 'center' }}>Kitchen & Bathroom</h1>
					<ul>
						<li>
							<Link to="/homepage">RepurpoSMART homepage</Link>
						</li>
						<li>
							<Link to="/interior">Interior Building Supplies</Link>
						</li>

						<li>
							<Link to="/exterior">
								Exterior Building Supplies
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

export default Kitchen;
