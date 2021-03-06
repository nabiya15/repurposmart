import React, { Component } from 'react';
import './Navbar.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown, NavItem } from 'react-materialize';

class Navbar extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">
							<i className="material-icons left tiny button-collapse">exit_to_app</i> Login With Google
						</a>
					</li>
				);
			default:
				return (
					<Dropdown
						trigger={<i className="material-icons">line_weight</i>}
					>
						<NavItem href="/">Homepage</NavItem>
						<NavItem divider />
						<NavItem href="/profile">Profile</NavItem>
						<NavItem divider />
						<NavItem href="/api/logout">Logout</NavItem>

					</Dropdown>
				);
		}
	}
	render() {
		return (
		<div className= "navbar-fixed ">
			<nav className="navbar-fixed nav" >
				<div className="nav-wrapper" >
					<Link to="/" className="left brand-logo logo">
						<img src="images/Logo.jpg" className="logo" alt="Repurposmart" ></img>
					</Link>
				
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Navbar);
