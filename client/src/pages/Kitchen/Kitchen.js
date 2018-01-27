import React from 'react';
import ItemCard from '../../components/ItemCard';
import items from '../../items.json';
import './Kitchen.css';
import {Col, Card} from "react-materialize";
import { Link } from 'react-router-dom';
//import API from '../../utils/API.js';

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
	/*	const category= "kitchen&bathroom"
			API.getItems(category)
			.then(res =>
				this.setState({
					items: res.data,
				})
			)
			.catch(err => console.log(err));*/
	};

	render() {
		return (
			<div className="container">
				<div>
				<Col m={6} s={12}>
					<Card
						className="blue-grey darken-1 titleCard"
						textClassName="white-text"
					>
						<h2>
							Kitchen and Bathroom
						</h2>
						<h5>
						<Link to="/"> Homepage </Link>||
						<Link to="/interior"> Interior Building Supplies </Link>||
						<Link to="/exterior"> Exterior Building Supplies </Link>
						</h5>
					</Card>
				</Col>
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
