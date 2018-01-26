import React from 'react';
import Navbar from '../../components/Navbar';
import "./ItemPage.css";


class ItemPage extends React.Component {
	state = {
		item: {}
	};

	componentDidMount() {
		// get thing by ID
		console.log(this);
		console.log(this.props.match.params.itemId);

		// Make API call-- set state to item data

		// API.getItemByID(this.props.match.params.itemId)
		// 	.then((data) => {
		// 		this.setState({
		// 			item: data
		// 		});
		// 	});
	}

	// Contact seller button function
	contactSeller() {
		console.log("contact seller");

		// grab item info

		// route to ContactSeller page 
	};

	render() {
		return(
			<div class="container">
				{/* Item Image */}
				<div class="row mt-lg 5">
					<div class="col-lg-7 wow fadeIn" data-wow-delay="0.2s">
						<div class="carousel-item active">
                                <img class="d-block w-100" src="https://secure.img1-ag.wfcdn.com/im/08371255/resize-h800%5Ecompr-r85/3133/31336293/Random+Stone+Concrete+Wood+Burning+Fire+Pit.jpg" alt="First slide" />
                        </div>
                    </div>
                	{/* Item Info */}
                    <div class="col-lg-5">
                    	<div class="row wow fadeIn" data-wow-delay="0.4s">
	                        <div class="col-md-12">
	                           
	                            <div class="product-wrapper">	                           
	                                <h2 class="h2-responsive mt-4 font-bold">Firepit</h2>

	                                <dl class="row mt-4">
	                                	<dt class="col-sm-3"><strong>Price</strong></dt>
	                                	
	                                	<dd>$127</dd>
	                                   

	                                    <dt class="col-sm-3"><strong>Decription</strong></dt>
	                                    <dd class="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
	                                    <dd class="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>

	                                    <dt class="col-sm-3 text-truncate"><strong>Seller</strong></dt>
	                                    <dd class="col-sm-9">username23234243</dd>
	                                </dl>

	                               
	                    	        <button type="button" class="btn btn-danger btn-md" onClick={this.contactSeller.bind(this)}>Contact seller </button>

	                    	    </div>
	                    	</div>
                        </div>
                    </div>        
                </div>
			</div>
		)
	}

}

export default ItemPage;