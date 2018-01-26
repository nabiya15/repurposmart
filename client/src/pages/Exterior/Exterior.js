import React from 'react';
import ItemCard from '../../components/ItemCard';
import items from '../../items.json';
import { Link } from 'react-router-dom';
import './Exterior.css';

class Exterior extends React.Component {
	// Setting inital state 
	constructor() {
		// console.log(items)
	    // super() allows us to use 'this'
	    super()
	    // getInitialState:
	    this.state = {
	      items: items
	    }
	    // Adding our isExteriorItem() method to 'this' 
	    this.isExteriorItem = this.isExteriorItem.bind(this);
  	};

  	isExteriorItem(item) {
		return item.category === 'exterior';
	};

	componentDidMount() {
		const exteriorItems = items.filter(this.isExteriorItem)
		this.setState( {items: exteriorItems} );
	};

	render() {
		return (
			<div>
				<div>
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

export default Exterior;
