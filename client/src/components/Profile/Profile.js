import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Col, Card, Button } from 'react-materialize';
import PostItemForm from "../PostItemForm/PostItemForm"

class Profile extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return 'Trying to connect';
			case false:
				return 'not logged in';
			default:
				const firstName =
					this.props.auth.firstName.charAt(0).toUpperCase() +
					this.props.auth.firstName.slice(1);
				const lastName =
					this.props.auth.lastName.charAt(0).toUpperCase() +
					this.props.auth.lastName.slice(1);
				return (
					<div>
					<h3>{firstName} {lastName}</h3>
					<h5>Post an item to sell </h5>
					<PostItemForm/>
					</div>
				);
		}
	}
	render() {
		console.log(this.props);
		return <div>{this.renderContent()}</div>;
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Profile);
