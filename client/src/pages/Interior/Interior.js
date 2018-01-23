import React from 'react';
//import Navbar from '../../components/Navbar';
import ItemCard from '../../components/ItemCard';
import items from '../../interiorItems.json';
import './Interior.css';
import { Link } from 'react-router-dom';
import Exterior from '../Exterior/Exterior.js';
import Kitchen from '../Kitchen/Kitchen';
import Homepage from '../Homepage/Homepage.js';

class Interior extends React.Component {
	// Setting this.state.items to the interiorItems json array
	state = {
		items
	};

	render() {
		return (
			<div>
				<div className="jumbotron">
					<h1 style={{ textAlign: 'center' }}>
						Interior Building Supplies
					</h1>
					<ul>
												<li>
							<Link to="/homepage">
								RepurpoSMART homepage
							</Link>
						</li>
						<li>
							<Link to="/kitchen">Kitchen and Bathroom</Link>
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

export default Interior;
