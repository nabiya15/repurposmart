import React from 'react';
import ItemCard from '../../components/ItemCard';
import items from '../../items.json';
import './Kitchen.css';
import { Link } from 'react-router-dom';

class Kitchen extends React.Component {
	// Setting inital state 
	constructor() {
		// console.log(items)
	    // super() allows us to use 'this'
	    super()
	    // getInitialState:
	    this.state = {
	      items: items
	    }
	    // Adding our isKitchenItem() method to 'this' 
	    this.isKitchenItem = this.isKitchenItem.bind(this);
  	};

  	isKitchenItem(item) {
		return item.category === 'kitchen' || item.category === 'bathroom';
	};

	componentDidMount() {
		const kitchenItems = items.filter(this.isKitchenItem)
		this.setState( {items: kitchenItems} );
	};

	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1 style={{ textAlign: 'center' }}>Kitchen & Bathroom</h1>
					<ul>
						<li>
							<Link to="/">Homepage</Link>
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
						category={item.category}
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
