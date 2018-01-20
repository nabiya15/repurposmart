import React from "react";
import "./ItemCard.css";

const ItemCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>{props.title}</strong>
        </li>
        <li>
          <strong>Price:</strong> {props.price}
        </li>
        <li>
          <strong>Seller:</strong> {props.seller}
        </li>
      </ul>
    </div>
  </div>
);

export default ItemCard;


// <span onClick={() => props.removeItem(props.id)} className="remove">
// 𝘅
// </span>