import React from 'react';
import Navbar from '../../components/Navbar';
import "./Homepage.css";

class Homepage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1 style={{textAlign:"center"}}>RepurpoSMART homepage</h1>
				<Navbar />
			</div>
		)
	}
}

export default Homepage;