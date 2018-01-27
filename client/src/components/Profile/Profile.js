import React,{Component} from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
	
	renderContent(){
		switch(this.props.auth){
			case null:
				return "blah";
			case false:
				return "false blah";
			default:
				const firstName = this.props.auth.firstName.charAt(0).toUpperCase()+this.props.auth.firstName.slice(1);
				const lastName =  this.props.auth.lastName.charAt(0).toUpperCase()+this.props.auth.lastName.slice(1);
				return (

					<div style={{textAlign: "center"}}> 
						<h3>{firstName} {lastName} 	</h3>
						
					</div>
			);
		}
	}
	render() {
		console.log(this.props);
		return (
			<div>
				{this.renderContent()}
			</div>
		);
	}
}

function mapStateToProps({auth}) {
	return { auth };
}

export default connect(mapStateToProps)(Profile);
