import React from 'react';
import ItemCard from '../../components/ItemCard';
import items from '../../items.json';
import './Interior.css';
import { Link } from 'react-router-dom';

class Interior extends React.Component {
	// Setting inital state 
	constructor() {
		// console.log(items)
	    // super() allows us to use 'this'
	    super()
	    // getInitialState:
	    this.state = {
	      items: items
	    }
	    // Adding our isInteriorItem() method to 'this' 
	    this.isInteriorItem = this.isInteriorItem.bind(this);
  	};

  	isInteriorItem(item) {
		return item.category === 'interior';
	};

	componentDidMount() {
		const interiorItems = items.filter(this.isInteriorItem)
		this.setState( {items: interiorItems} );
	};

	render() {
		// {console.log(this.state)}
		return (
			<div>
				<div>
					<h1 style={{ textAlign: 'center' }}>
						Interior Building Supplies
					</h1>
					<ul>
						<li>
							<Link to="/">Homepage</Link>
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

export default Interior;
