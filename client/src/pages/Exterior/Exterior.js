import React from 'react';
import ItemCard from '../../components/ItemCard';
import items from '../../items.json';
import { Link } from 'react-router-dom';
import './Exterior.css';
import { Col, Card } from 'react-materialize';
//import API from '../../utils/API.js';

class Exterior extends React.Component {
	// Setting inital state
	constructor() {
		// console.log(items)
		// super() allows us to use 'this'
		super();
		// getInitialState:
		this.state = {
			items: items
		};
		// Adding our isExteriorItem() method to 'this'
		this.isExteriorItem = this.isExteriorItem.bind(this);
	}

	isExteriorItem(item) {
		return item.category === 'exterior';
	}

	componentDidMount() {
		const exteriorItems = this.state.items.filter(this.isExteriorItem);
		this.setState({ items: exteriorItems });
//		var category = "exterior"
/*		API.getItems(category)
			.then(res =>
				this.setState({
					items: res.data,
				})
			)
			.catch(err => console.log(err));*/
	}

	render() {
		return (
			<div className="container">
				<div>
					<Col m={6} s={12}>
						<Card
							className="blue-grey darken-1 titleCard"
							textClassName="white-text"
						>
							<h2>Exterior Building Supplies</h2>
							<h5>
								<Link to="/"> Homepage </Link>||
								<Link to="/kitchen">
									{' '}
									Kitchen and Bathroom{' '}
								</Link>||
								<Link to="/interior">
									{' '}
									Interior Building Supplies{' '}
								</Link>
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

export default Exterior;
