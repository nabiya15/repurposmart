import React from 'react';
//import Navbar from '../../components/Navbar';
import { Parallax } from 'react-parallax';
import './Homepage.css';
import { Link } from 'react-router-dom';
class Homepage extends React.Component {
	render() {
		return (
			<div>
				<Parallax
					blur={{ min: -5, max: 5 }}
					bgImage={require('../../assets/images/1.jpg')}
					bgImageAlt="home"
					strength={300}
					bgWidth= "100%"
					bgHeight= "50em"
				>
					<div className="infoDiv">
						<h2>RepurpoSMART</h2>
					</div>
					<div style={{ height: '600px' }} />
				</Parallax>

				<Parallax
					blur={{ min: -5, max: 5 }}
					bgImage={require('../../assets/images/2.jpg')}
					bgImageAlt="home"
					strength={400}
					bgWidth= "100%"
					bgHeight= "50em"
				>
				<Link to="/kitchen">
					<div className="infoDiv">
						<h2>Kitchen and Bathroom</h2>
					</div>
				</Link>
					<div style={{ height: '600px' }} />
				</Parallax>

				<Parallax
					blur={{ min: -5, max: 5 }}
					bgImage={require('../../assets/images/3.jpg')}
					bgImageAlt="home"
					strength={400}
					bgWidth= "100%"
					bgHeight= "50em"
				>
				<Link to="/interior">
					<div className="infoDiv">
						<h2>Interior Building Supplies</h2>
					</div>

				</Link>
					<div style={{ height: '500px' }} />
				</Parallax>

				<Parallax
					blur={{ min: -5, max: 5 }}
					bgImage={require('../../assets/images/4.jpg')}
					bgImageAlt="home"
					strength={400}
					bgWidth= "100%"
					bgHeight= "50em"
				>
				<Link to="/exterior">
					<div className="infoDiv">
						<h2>Exterior Building Supplies</h2>
					</div>
				</Link>
					<div style={{ height: '500px' }} />
				</Parallax>

			</div>
		);
	}
}

export default Homepage;
