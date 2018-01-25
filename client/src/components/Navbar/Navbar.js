import React, { Component } from 'react';
import './Navbar.css';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

class Navbar extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a className="waves-effect waves-light btn" href="/auth/google"  >Login</a>
					</li>
				);
			default:
				return (
					<li>
						<a className="waves-effect waves-light btn" href="/api/logout">Logout</a>
					</li>
				);
		}
	}
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link to={this.props.auth ? "/homepage" : "/" }
					className = "left brand-logo">
						Repurposmart
					</Link>
					<ul className="right">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Navbar);
