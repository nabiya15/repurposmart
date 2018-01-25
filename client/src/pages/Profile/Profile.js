import React from 'react';
import { connect } from 'react-redux';

class Profile extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1>{console.log(this)}</h1>
					<h3>
						<ul>
				
						</ul>
					</h3>
				</div>
			</div>
		);
	}
}

const mapStatetoProps = state => {
	return { auth: state.auth };
};

export default connect(mapStatetoProps)(Profile);
