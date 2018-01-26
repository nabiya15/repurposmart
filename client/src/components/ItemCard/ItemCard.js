import React from 'react';
import './ItemCard.css';
import { withRouter } from 'react-router-dom';

class ItemCard extends React.Component {
  constructor() {
    // super() allows us to use 'this'
    super();
    // getInitialState:
    this.state = {
      item: {}
    };
    // Adding our addToItemPage() method to 'this' (binds it to the actual App)
    this.goToItemPage = this.goToItemPage.bind(this);
  }

  getItem() {
    // Update state
    // Make a copy
    const item = { ...this.state.item };
    // Add the new item

    // Set state
    this.setState({ item: item });
  }

  goToItemPage() {
    // Create an item object
    const item = {
      id: this.props.id,
      title: this.props.title,
      image: this.props.image,
      price: this.props.price,
      seller: this.props.seller,
      category: this.props.category
    };

    // console.log(item);

    // Route to ItemPage
    this.props.history.push(`${this.props.category}/${item.id}`);
  }

  render() {
    return (
      <div className="card">
        <div className="img-container">
          <button>
            <img
              src={this.props.image}
              alt={this.props.name}
              onClick={this.goToItemPage.bind(this)}
            />
          </button>
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>{this.props.title}</strong>
            </li>
            <li>
              <strong>Price:</strong> {this.props.price}
            </li>
            <li>
              <strong>Seller:</strong> {this.props.seller}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(ItemCard);
