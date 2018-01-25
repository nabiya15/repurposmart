import React from 'react';
import Navbar from '../../components/Navbar';
import "./ItemPage.css";


class ItemPage extends React.Component {
	state = {
		item: {}
	};

	componentDidMount() {
		// get thing by ID
		console.log(this.props.match.params.itemId);
		
		// API.getItemByID(this.props.match.params.itemId)
		// 	.then((data) => {
		// 		this.setState({
		// 			item: data
		// 		});
		// 	});
	}

	render() {
		return(
			<div>
				<div>
				 <Navbar />
				</div>
				<div>
				{/* Title */}
				<p>{this.state.item.name}</p>
				
				{/* Price */}
				{/* Image */}
				{/* Description */}
				{/* Contact button */}
				</div>
			</div>
		)
	}

}

export default ItemPage;