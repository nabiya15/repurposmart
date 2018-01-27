import React from 'react';
import ItemCard from '../../components/ItemCard';
import items from '../../items.json';
import './Interior.css';
import { Link } from 'react-router-dom';
import {Col, Card} from "react-materialize";
//import API from '../../utils/API.js';

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
			/*const category = "interior";
			API.getItems(category)
			.then(res =>
				this.setState({
					items: res.data,
				})
			)
			.catch(err => console.log(err));*/
	};

	render() {
		// {console.log(this.state)}
		return (
			<div className= "container">
				<div>
				<Col m={6} s={12}>
					<Card
						className="blue-grey darken-1 titleCard"
						textClassName="white-text"
					>
						<h2>
							Interior Building Supplies
						</h2>
						<h5>
						<Link to="/"> Homepage </Link>||
						<Link to="/kitchen"> Kitchen and Bathroom </Link>||
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

export default Interior;
